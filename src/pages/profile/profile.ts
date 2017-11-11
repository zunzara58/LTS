import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';
import { LoginPage } from '../login/login';
import * as firebase from 'firebase';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers:[UsersserviceProvider]
})
export class ProfilePage {
  private AuserDisplayName: any;
  private userDisplayLName: any;
  private userEmail: any;
  private userDept: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public usersService: UsersserviceProvider ) {
    var myUserId = firebase.auth().currentUser.uid;
    this.displayUser(myUserId);
  }

  displayUser(theUserId){
    var that = this;
    this.usersService.viewUser(theUserId).then(snapshot =>{

      that.AuserDisplayName=snapshot.val().first_name;
      that.userDisplayLName=snapshot.val().last_name;
      that.userEmail=snapshot.val().email;
      that.userDept=snapshot.val().department;
    })
  }

  logUserOut(){
    //call user service
    this.usersService.logoutUser().then (() =>{
      this.navCtrl.setRoot(LoginPage);
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
