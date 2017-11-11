import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { StaffonleavePage } from '../pages/staffonleave/staffonleave';
import { LeavePage } from '../pages/leave/leave';
import { AcademicPage } from '../pages/academic/academic';
import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    var that = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        that.rootPage = ProfilePage;
        // ...
      } else {
        // User is signed out.
        // ...
        that.rootPage = LoginPage;
      }
    });

    // used for an example of ngFor and navigation
    this.pages = [
      //{ title: 'Home', component: HomePage },
    // { title: 'List', component: ListPage },
      //{ title: 'Login', component: LoginPage },
      { title: 'Profile', component: ProfilePage },
      { title: 'Academic Calendar', component: AcademicPage },
      { title: 'Leave', component: LeavePage },
      { title: 'Staff on Leave', component: StaffonleavePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
