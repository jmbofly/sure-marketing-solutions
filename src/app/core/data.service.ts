import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private afs: AngularFirestore) { }

  addToCollection<T>(path: string, data: any) {
    return this.afs.collection<T>(path).add(data);
  };

  getCollection<T>(path: string) {
    return this.afs.collection<T>(path);
  }

  addDocument<T>(path: string, data: any, opts?: any) {
    return this.afs.doc<T>(path).set(data, opts);
  }

  getDocById<T>(path: string, id: string) {
    return this.afs.doc<T>(`${path}/${id}`);
  }

  updateDocById<T>(path: string, id: string, data: any) {
    return this.afs.doc<T>(`${path}/${id}`).update(data);
  }


}
