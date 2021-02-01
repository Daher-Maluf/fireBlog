import { Timestamp } from '@firebase/firestore-types';

export interface Articulo {
  titlePost: string;
  contentPost: string;
  imagePost?: any;
  id?: string;
  fecha?: Timestamp;
  tagsPost: string;
  fileRef?: string;
}
