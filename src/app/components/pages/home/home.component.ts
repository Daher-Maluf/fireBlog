import { PostService } from './../../posts/post.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PostI } from '../../../shared/models/post.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public posts$: Observable<PostI[]>;

  // @HostListener('window:scroll', ['$event'])
  // onScroll(){
  //   const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
  //   const max = (document.documentElement.scrollHeight || document.body.scrollHeight);
  //   console.log({pos, max});
    
  // }

  constructor(private postSvc: PostService) { }

  ngOnInit() {
    this.posts$ = this.postSvc.getAllPosts();
  }
}
