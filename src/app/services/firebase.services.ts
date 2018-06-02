import {Injectable} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
@Injectable()
export class FirebaseService{
    userData: FirebaseListObservable<Daters[]>;
    genderData: FirebaseListObservable<gender[]>;
    constructor(private af: AngularFireDatabase) {
  }

  getuserData(gender: string = null) {
    if (gender != null) {
        this.userData = this.af.list('/userData', {
            query: {
                orderByChild: 'gender',
                equalTo: gender
            }
        }) as FirebaseListObservable<Daters[]>;
    } else {
        this.userData = this.af.list('/userData') as FirebaseListObservable<Daters[]>;
    }
    return this.userData;
}

  getgenderData() {
      this.genderData= this.af.list('/genderData') as FirebaseListObservable<gender[]>;
      return this.genderData ;
  }

  addDaters(newDaters) {
    return this.userData.push(newDaters);
}
}

export interface Daters {
  $key?: string;
  name?: string; // ? means optional
  about?: string;
  gender: string;
  age?: number;
  surname?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  email?: string;
  created_at: string;
}

export interface gender {
  $key?: string;
  name?: string;
}

