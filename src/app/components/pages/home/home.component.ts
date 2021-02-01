import { PostService } from './../../posts/post.service';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Articulo } from '../../../shared/models/post.interface';
import { TagsService } from '../tags/tags.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public posts$: Observable<Articulo[]>;
  data: Array<Articulo>;
  totalRecords: number;
  page = 1;




  constructor(
    private postSvc: PostService,
    private ts: TagsService
     ) {
       this.data = new Array<any>();


   }

  ngOnInit() {
    // this.posts$ = this.postSvc.getAllPosts();
    this.loadData();
    this.postSvc.getTime();

  }


  loadData() {
    this.postSvc.getAllPosts().subscribe((data) => {
      console.log(data);
      this.data = data;
      this.totalRecords = data.length;
      this.posts$ = of(this.data);
    });
  }






  buscarDatos() {
    this.ts.col$('posts').subscribe(posts =>  console.log(posts));
  }



}
