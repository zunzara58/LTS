import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { StaffonleavePage } from '../pages/staffonleave/staffonleave';
import { AcademicPage } from '../pages/academic/academic';
import { ProfilePage } from '../pages/profile/profile';
import { LeavePage } from '../pages/leave/leave';
import { SignupPage } from '../pages/signup/signup';
import { PostAddPage } from '../pages/post-add/post-add';
import {HttpModule} from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { UsersserviceProvider } from '../providers/usersservice/usersservice';
import { PostsServiceProvider } from '../providers/posts-service/posts-service';

  // Initialize Firebase
  export const config = {
    apiKey: "AIzaSyB0wbyt4mSicfUgb_AwUunzDMl5nn3Yrdg",
    authDomain: "leavetrack-9b15c.firebaseapp.com",
    databaseURL: "https://leavetrack-9b15c.firebaseio.com",
    projectId: "leavetrack-9b15c",
    storageBucket: "",
    messagingSenderId: "980132333899"
  };
  firebase.initializeApp(config);

  //check logged in status
  firebase.auth().onAuthStateChanged((user) => {

    if(user){
      this.rootPage = HomePage;
    }else{
      this.rootPage = LoginPage;
    }
  })

@NgModule({
  declarations: [
    MyApp,
    HomePage,
   // ListPage,
    LoginPage,
    ProfilePage,
    StaffonleavePage,
    LeavePage,
    AcademicPage,
    PostAddPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    //ListPage,
    LoginPage,
    ProfilePage,
    AcademicPage,
    StaffonleavePage,
    PostAddPage,
    LeavePage,
    SignupPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersserviceProvider,
    PostsServiceProvider
  ]
})
export class AppModule {}
