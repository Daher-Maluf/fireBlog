import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of} from 'rxjs';
import { Articulo } from 'src/app/shared/models/post.interface';
import { PostService } from '../../posts/post.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  public termino = '';
  public posts: Articulo [] = [];
  public busquedas$: Observable<Articulo[]>;


  constructor(private activatedRoute: ActivatedRoute,
              private postSvc: PostService) { }

  ngOnInit(): void {

      this.activatedRoute.params.subscribe( params => {
       
        this.termino = params.termino;
    
        this.buscarPosts(params.termino);

    });



  }

  buscarPosts(termino: string) {
    this.busquedas$ = of(this.posts = []);
    termino = termino.toLowerCase();
    this.postSvc.getAllPosts()
   .subscribe(resp => {

     resp.map((e, i) => {
       // tslint:disable-next-line: no-unused-expression
       if (e.titlePost.toLowerCase().indexOf( termino ) >= 0) {

          this.posts.push(e);
          

       }
     });

   });
  }

}
