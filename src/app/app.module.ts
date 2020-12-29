import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule } from '@angular/material/button';
import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const config = {
  apiKey: "AIzaSyDfINMhWGtGgBmrgFRPKjROA9X3vLVVCNU",
  authDomain: "fireban-32.firebaseapp.com",
  projectId: "fireban-32",
  storageBucket: "fireban-32.appspot.com",
  messagingSenderId: "1052168453131",
  appId: "1:1052168453131:web:2a7d187a558dbfc3ef9b0e",
  measurementId: "G-M682EWFD0T"
};


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    SharedModule,
    // 3. Initialize
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
