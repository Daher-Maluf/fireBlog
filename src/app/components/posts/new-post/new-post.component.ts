import { Component,ViewEncapsulation, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Articulo } from '../../../shared/models/post.interface';
import { PostService } from '../post.service';






@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NewPostComponent implements OnInit {

 

  private image: any;
  editorStyle = {
    heigth: '300px;'
  };
  constructor(private postSvc: PostService) {


  }

  public newPostForm = new FormGroup({
    titlePost: new FormControl('', Validators.required),
    contentPost: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    tagsPost: new FormControl('', Validators.required),
    imagePost: new FormControl('', Validators.required),
  });

  ngOnInit() {
    
    
  }

  addNewPost(data: Articulo) {
    console.log('New post', data);
    this.postSvc.preAddAndUpdatePost(data, this.image);
  }

  handleImage(event: any): void {
    this.image = event.target.files[0];
  }
}
