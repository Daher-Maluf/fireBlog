import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../../posts/post.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  
  @Input() post: any;

  constructor(private postSvc: PostService ) { }

  ngOnInit() {
   
  }
}
