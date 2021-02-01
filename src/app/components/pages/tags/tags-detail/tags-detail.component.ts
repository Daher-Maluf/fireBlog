import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Articulo } from 'src/app/shared/models/post.interface';
import { TagsService } from '../tags.service';

@Component({
  selector: 'app-tags-detail',
  templateUrl: './tags-detail.component.html',
  styleUrls: ['./tags-detail.component.scss']
})
export class TagsDetailComponent implements OnInit {
  public categoryArr: Articulo[] = [];
  postscat$: Observable<Articulo[]>;


  constructor(
    private route: ActivatedRoute,
    private ts: TagsService
    ) { }

  async ngOnInit() {

    const category = this.route.snapshot.params.category;
    this.postscat$ = this.ts.getPostByCategory(category);

  }

}
