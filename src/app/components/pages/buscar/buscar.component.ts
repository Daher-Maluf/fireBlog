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
  public posts: PostI [] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private postSvc: PostService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      console.log(params.termino);
      // TODO LLAMAR SERVICIO
      this.postSvc.getAllPosts();


    });
    // this.buscarPosts();
  }
// buscarPosts(){
//     this.postSvc.getAllPosts()
//   .subscribe(resp => {
//     console.log(resp);

//   })
// }
}
