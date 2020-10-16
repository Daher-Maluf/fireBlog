import { PostService } from './../../posts/post.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PostI } from '../../../shared/models/post.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public lastVisible: any = [];
  public posts: any;


 // Save first document in snapshot of items received
 firstInResponse: any = [];

 // Save last document in snapshot of items received
 lastInResponse: any = [];

cargado = false;

  constructor(
    private firestore: AngularFirestore,
    private postSvc: PostService
     ) {
  //  this.paginatedService.loadItems();
     this.loadPost();
   }

  ngOnInit() {


  }

  loadPost() {
    this.cargado = false;
    this.posts = this.postSvc.getPagPost(this.lastVisible, 6);
    console.log('load post', this.posts);
    setTimeout(() => {
      this.cargado = true;
    }, 3000);

  }


}
