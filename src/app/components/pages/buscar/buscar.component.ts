import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PostI } from 'src/app/shared/models/post.interface';
import { PostService } from '../../posts/post.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  public termino = '';
  public posts: PostI [] = [];


  constructor(private activatedRoute: ActivatedRoute,
              private postSvc: PostService) { }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe( params => {
        console.log(params.termino);

        this.termino = params.termino;
      // TODO LLAMAR SERVICIO


  // this.posts = this.postSvc.buscarPosts(params.termino);
        this.buscarPosts(params.termino);

    });


  }

  buscarPosts(termino: string) {
    this.posts = [];
    termino = termino.toLowerCase();
    this.postSvc.getAllPosts()
   .subscribe(resp => {

     resp.map((e, i) => {
       // tslint:disable-next-line: no-unused-expression
       if (e.titlePost.toLowerCase().indexOf( termino ) >= 0) {

          this.posts.push(e);
          console.log(e);

       }
     });

   });
  }

}
