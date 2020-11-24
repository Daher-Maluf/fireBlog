import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { type } from 'os';
import { Observable } from 'rxjs';
import {  map } from 'rxjs/operators';
import { PostI } from '../../../shared/models/post.interface';

type collectionPredicate<T> = string | AngularFirestoreCollection;

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  private postsCollection: AngularFirestoreCollection<PostI>;

  constructor(private afs: AngularFirestore) {
    this.postsCollection = afs.collection<PostI>('posts');
   }

   
// metodo que nos da acceso a las colecciones.
 private col<T>(ref: collectionPredicate<T>, queryFn?): AngularFirestoreCollection{
      return typeof ref === "string" ? this.afs.collection(ref, queryFn) : ref;
  }

  col$<T>(ref: collectionPredicate<T>, queryFn?): Observable<any[]>{
     return this.col(ref, queryFn).snapshotChanges().pipe(
         map(docs => {
           return docs.map(d => {
             const data = d.payload.doc.data();
             const id = d.payload.doc.id;
             return {id, ...data};
           });
         })

     );
  }


  getPostByCategory(category: string) {
    
    return this.col$('posts', ref => ref.where('tagsPost','array-contains', category));


  }
}
