import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';
import { LoginPage } from '../login/login';
import * as firebase from 'firebase';

/**
 * Generated class for the UsersDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users-detail',
  templateUrl: 'users-detail.html',
})
export class UsersDetailPage {

  private userPhotoUrl: any;
  private userDislplayName: any;
  
  
    constructor(private navCtrl: NavController, private usersService: UsersserviceProvider) {
  
  var myUserId = firebase.auth().currentUser.uid; //current user id
  this.displayUser(myUserId);
  
  
  
    }
  
  displayUser(theUserId){
    
    var that = this;
    
    this.usersService.viewUser(theUserId).then(snapshot => {
    
       //get user photo
      that.userPhotoUrl = snapshot.val().photo; //get user photo
       that.userDislplayName= snapshot.val().username; 
    })
  }
  
  logUserOut(){
    //call user service
    this.usersService.logoutUser().then(() => {
      this.navCtrl.setRoot(LoginPage);
    });
  }
  }
