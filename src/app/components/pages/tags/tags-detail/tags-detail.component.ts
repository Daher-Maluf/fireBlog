import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { PostI } from 'src/app/shared/models/post.interface';
import { PostService } from '../../../posts/post.service';
import { TagsService } from '../tags.service';

@Component({
  selector: 'app-tags-detail',
  templateUrl: './tags-detail.component.html',
  styleUrls: ['./tags-detail.component.scss']
})
export class TagsDetailComponent implements OnInit {
  public categoryArr: PostI[] = [];
  postscat$: Observable<PostI[]>;


  constructor(
    private route: ActivatedRoute,
    private ps: PostService,
    private ts: TagsService
    ) { }

  async ngOnInit() {

    const category = this.route.snapshot.params.category;
    console.log(category);

    this.postscat$ = this.ts.getPostByCategory(category);

    // await this.ps.getPostByCategory(category).
    // then(snap => {
    //   snap.forEach(doc => {
    //    this.categoryArr.push(doc.data() as PostI);
    //   });
    //   console.log(this.categoryArr);
    // }).catch(err => {
    //   console.log('error', err);
    // });
  }

}
