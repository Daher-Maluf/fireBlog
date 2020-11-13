import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { promise } from 'protractor';
import { PostI } from 'src/app/shared/models/post.interface';
import { PostService } from '../../../posts/post.service';

@Component({
  selector: 'app-tags-detail',
  templateUrl: './tags-detail.component.html',
  styleUrls: ['./tags-detail.component.scss']
})
export class TagsDetailComponent implements OnInit {
  public categoryArr: PostI[] = [];


  constructor(
    private route: ActivatedRoute,
    private ps: PostService
    ) { }

  async ngOnInit(){

    const category = this.route.snapshot.params.category;
    console.log(category);
     
    await this.ps.getPostByCategory(category).
    then(snap => {
      console.log(snap.size, 'snap size');
      snap.forEach(doc => {
       this.categoryArr.push(doc.data() as PostI);
      });
      console.log(this.categoryArr);
    }).catch(err => {
      console.log('error', err);
    });
  }

}
