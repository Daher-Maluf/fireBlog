import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ContactI } from '../../shared/models/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
private contactCollection: AngularFirestoreCollection<ContactI>;
  constructor(private afs: AngularFirestore) {
    this.contactCollection = afs.collection<ContactI>('contacto');
  }

  saveMessage(newContacto: ContactI): void{
    this.contactCollection.add(newContacto);
  }
}
