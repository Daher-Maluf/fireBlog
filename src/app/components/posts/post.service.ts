import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import firebase from 'firebase';
import { map, finalize } from 'rxjs/operators';
import { Articulo } from '../../shared/models/post.interface';
import { FileI } from '../../shared/models/file.interface';
import { AngularFireStorage } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsCollection: AngularFirestoreCollection<Articulo>;
  private filePath: any;
  private downloadURL: Observable<string>;



  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.postsCollection = afs.collection<Articulo>('posts');
  }

  public getAllPosts(): Observable<Articulo[]> {
    return this.postsCollection
      .snapshotChanges()
      .pipe(
        map(actions =>

          actions.map(a => {
            const data = a.payload.doc.data() as Articulo;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }
 


  public getOnePost(id: Articulo): Observable<Articulo> {
    return this.afs.doc<Articulo>(`posts/${id}`).valueChanges();
  }

  public deletePostById(post: Articulo) {
    return this.postsCollection.doc(post.id).delete();
  }

  public editPostById(post: Articulo, newImage?: FileI) {
    if (newImage) {
      this.uploadImage(post, newImage);
    } else {
      return this.postsCollection.doc(post.id).update(post);
    }
  }

  public preAddAndUpdatePost(post: Articulo, image: FileI,): void {
  
    
    this.uploadImage(post, image);
  }

  buscarPosts(termino: string) {
   const encontrados: Articulo[] = [];
   termino = termino.toLowerCase();
   this.getAllPosts()
  .subscribe(resp => {

    resp.map((e, i) => {
      // tslint:disable-next-line: no-unused-expression
      if (e.titlePost.toLowerCase().indexOf( termino ) >= 0) {

         encontrados.push(e);
         console.log(e);

      }
    });

  });

}

  private savePost(post: Articulo) {
    const postObj = {
      titlePost: post.titlePost,
      contentPost: post.contentPost,
      imagePost: this.downloadURL,
      fileRef: this.filePath,
      tagsPost: post.tagsPost,
      fecha: post.fecha
      
    };

    if (post.id) {
      return this.postsCollection.doc(post.id).update(postObj);
    } else {
      return this.postsCollection.add(postObj);
    }

  }

  public getTime() {
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    return timestamp;
  }
   


  private uploadImage(post: Articulo, image: FileI) {
    this.filePath = `images/${image.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task.snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(urlImage => {
            this.downloadURL = urlImage;
            this.savePost(post);
          });
        })
      ).subscribe();
  }


}
