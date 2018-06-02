import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { FirebaseService } from './services/firebase.services';
import {NavbarComponent} from './navbar/navbar.component';


@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css'],
 providers: [FirebaseService]
})

export class AppComponent implements OnInit {
  title = 'app';
  appState: string;
  activeKey: string;
  userData: Daters[];
  genderData: gender[];
 constructor(private _firebaseService: FirebaseService) {
}

 ngOnInit() {
   this.appState = 'default';
   this._firebaseService.getuserData().subscribe(userData => {
     this.userData = userData;
   });

   this._firebaseService.getgenderData().subscribe(genderData => {
     this.genderData = genderData;
   });
 }

 filtergender(gender) {
  this._firebaseService.getuserData(gender).subscribe(userData => {
    this.userData = userData;
  })
}

deleteItem(itemKey) {
  this._firebaseService.getuserData().remove(itemKey);
}



 changeState(state, key = null) {
  if(key) {
    this.activeKey = key;
  }
  this.appState = state;
}

addDaters(name: string, gender: string, about: string) {
  var newDaters = {
    name: name,
    gender: gender,
    about: about
  }
  this._firebaseService.addDaters(newDaters);
  this.changeState('default');
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
 name?: string; // ? means optional
}