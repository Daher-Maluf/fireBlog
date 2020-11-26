import { PostService } from './../../posts/post.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PostI } from '../../../shared/models/post.interface';
import {of, from} from 'rxjs';
import { TagsService } from '../tags/tags.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 // Models for Input fields
 nameValue: string;
 placeValue: string;

 // Data object for listing items
 tableData: any[] = [];

 // Save first document in snapshot of items received
 firstInResponse: any = [];

 // Save last document in snapshot of items received
 lastInResponse: any = [];

 // Keep the array of first document of previous pages
 prev_strt_at: any = [];

 // Maintain the count of clicks on Next Prev button
 pagination_clicked_count = 0;

 // Disable next and prev buttons
 disable_next = false;
 disable_prev = false;
  public posts$: Observable<any[]>;




  constructor(
    private firestore: AngularFirestore,
    private postSvc: PostService,
    private ts: TagsService
     ) {
    this.loadItems();
   }

  ngOnInit() {
    // this.posts$ = this.postSvc.getAllPosts();



  }
  loadItems() {
    this.firestore.collection('posts', ref => ref
      .limit(2)
      .orderBy('tagsPost', 'desc')
    ).snapshotChanges()
      .subscribe(response => {
        if (!response.length) {
          console.log('No Data Available');
          return false;
        }
        this.firstInResponse = response[0].payload.doc;
        this.lastInResponse = response[response.length - 1].payload.doc;

        this.posts$ = of(this.tableData = []);
        for (const item of response) {
          this.tableData.push(item.payload.doc.data());
          
        }

        // Initialize values
        this.prev_strt_at = [];
        this.pagination_clicked_count = 0;
        this.disable_next = false;
        this.disable_prev = false;

        // Push first item to use for Previous action
        this.push_prev_startAt(this.firstInResponse);
      }, error => {
      });
  }
  prevPage() {
    this.disable_prev = true;
    this.firestore.collection('posts', ref => ref
      .orderBy('tagsPost', 'desc')
      .startAt(this.get_prev_startAt())
      .endBefore(this.firstInResponse)
      .limit(2)
    ).get()
      .subscribe(response => {
        this.firstInResponse = response.docs[0];
        this.lastInResponse = response.docs[response.docs.length - 1];
        
        this.posts$ = of(this.tableData = []);
        for (let item of response.docs) {
          this.tableData.push(item.data());
        }

        //Maintaing page no.
        this.pagination_clicked_count--;

        //Pop not required value in array
        this.pop_prev_startAt(this.firstInResponse);

        //Enable buttons again
        this.disable_prev = false;
        this.disable_next = false;
      }, error => {
        this.disable_prev = false;
      });
  }
  nextPage() {
    this.disable_next = true;
    this.firestore.collection('posts', ref => ref
      .limit(2)
      .orderBy('tagsPost', 'desc')
      .startAfter(this.lastInResponse)
    ).get()
      .subscribe(response => {

        if (!response.docs.length) {
          this.disable_next = true;
          return;
        }

        this.firstInResponse = response.docs[0];

        this.lastInResponse = response.docs[response.docs.length - 1];
        this.posts$=of(this.tableData = []);
        for (let item of response.docs) {
          this.tableData.push(item.data());
        }

        this.pagination_clicked_count++;

        this.push_prev_startAt(this.firstInResponse);

        this.disable_next = false;
      }, error => {
        this.disable_next = false;
      });
  }
//  add  document
  push_prev_startAt(prev_first_doc) {
    this.prev_strt_at.push(prev_first_doc);
  }

  // Remove not required document
  pop_prev_startAt(prev_first_doc) {
    this.prev_strt_at.forEach(element => {
      if (prev_first_doc.data().id == element.data().id) {
        element = null;
      }
    });
  }

  // Return the Doc rem where previous page will startAt
  get_prev_startAt() {
    if (this.prev_strt_at.length > (this.pagination_clicked_count + 1)) {
      this.prev_strt_at.splice(this.prev_strt_at.length - 2, this.prev_strt_at.length - 1);
    }
    return this.prev_strt_at[this.pagination_clicked_count - 1];
  }


  

 

  buscarDatos() {
    this.ts.col$('posts').subscribe(posts =>  console.log(posts));
  }



}
