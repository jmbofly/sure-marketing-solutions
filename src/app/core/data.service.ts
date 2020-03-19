import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private afs: AngularFirestore) { }

  addToCollection<T>(collectionName: string, data: any) {
    return this.afs.collection<T>(collectionName).add(data).finally(() => console.log('collection added', collectionName));
  };

  getDataFromCollectionById<T>(collectionName: string, id: string) {
    return this.afs.collection<T>(collectionName).doc<T>(id).valueChanges()
  }


}
