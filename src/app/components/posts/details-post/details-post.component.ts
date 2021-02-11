import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Observable } from 'rxjs';
import { Articulo } from '../../../shared/models/post.interface';

@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.scss']
})
export class DetailsPostComponent implements OnInit {
  public post$: Observable<Articulo>;
  public ROOT_URL;

  constructor(private route: ActivatedRoute, private postSvc: PostService) { 
     
  }

  ngOnInit() {
    
    const idPost = this.route.snapshot.params.id;
    this.post$ = this.postSvc.getOnePost(idPost);
    this.ROOT_URL = `https://ngblog-149c9.web.app/post/${idPost}`;
  }

}
