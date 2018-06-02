import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { HeroComponent } from './hero/hero.component';


export const firebaseConfig ={
  apiKey: "AIzaSyDU0Mnje7cyZZFkrP0QQlSzBW0_WUOtL4s",
  authDomain: "prework2.firebaseapp.com",
  databaseURL: "https://prework2.firebaseio.com",
  projectId: "prework2",
  storageBucket: "",
  messagingSenderId: "822353204801"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule
   ],
  providers: [],
  bootstrap: [AppComponent]
 })

export class AppModule { }
