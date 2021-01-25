import * as firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;
export interface PostI {
  titlePost: string;
  contentPost: string;
  imagePost?: any;
  id?: string;
  createdAt?: Timestamp;
  tagsPost: string;
  fileRef?: string;
}
