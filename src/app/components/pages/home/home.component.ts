import { PostService } from './../../posts/post.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PostI } from '../../../shared/models/post.interface';
import { TagsService } from '../tags/tags.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // public lastVisible: any = [];
  // public posts: any;
  public posts$: Observable<PostI[]>;


// cargado = false;

  constructor(
    private firestore: AngularFirestore,
    private postSvc: PostService,
    private ts: TagsService
     ) {
  //  this.paginatedService.loadItems();
    //  this.loadPost();
   }

  ngOnInit() {
    // this.posts$ = this.postSvc.getAllPosts();
  this.ts.loadItems();
    

  }
 

  buscarDatos(){
    this.ts.col$('posts').subscribe(posts =>  console.log(posts));
  }



}
