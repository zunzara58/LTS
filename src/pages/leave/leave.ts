import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, LoadingController, NavParams } from 'ionic-angular';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';
import { PostsServiceProvider } from '../../providers/posts-service/posts-service';
import * as firebase from 'firebase';
import { HomePage } from '../home/home';
import { StaffonleavePage } from '../staffonleave/staffonleave';
import { PostAddPage } from '../post-add/post-add';
import { LoginPage } from '../login/login';

/**
 * Generated class for the LeavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leave',
  templateUrl: 'leave.html',
  providers: [UsersserviceProvider,PostsServiceProvider]
})
export class LeavePage {
  
	private userPostsLists= [];
	private userProfileLists: any;
	private userDisplayName: any;
	private userEmail: any;
	private userId: any;
  constructor(public navCtrl: NavController, private postsService: PostsServiceProvider, private usersService: UsersserviceProvider) {
   
   this.userProfileLists = firebase.database().ref('users');
   this.userId = firebase.auth().currentUser.uid;
   //get list of posts on page init
   this.listPosts();

   
  }
  
 

  
  
  redirectToPostAddPage(){
  	//redirect here
  	this.navCtrl.push(PostAddPage);
  }

  redirectToLeavePage(){
  	//redirect here
  	this.navCtrl.push(LeavePage);
  }
  
  
    logUserOut(){
    //call user service
    this.usersService.logoutUser().then (() =>{
      this.navCtrl.setRoot(LoginPage);
    });
  }

  
listPosts(){
	var that = this;
	this.postsService.listPostService().then(snapshot => {
			         //empty this array first to avoid duplication of content when value changes in the database
			         //so every time there is a change in the database, empty the array, fetch fresh data from db
			         //this is because we are fetching data with on('value') inside listPostService()
			       
			         that.userPostsLists.length = 0;  
			         
                    snapshot.forEach(function (childSnapshot) {
                        var data = childSnapshot.val();
                        data['key'] = childSnapshot.key;
                         that.userPostsLists.push(data);
                         
                         
                         console.log("post details: "+that.userPostsLists);
                         //get the user's detail
                         that.usersService.viewUser(that.userId).then(snapshotUser=> {
                         	that.userDisplayName = snapshotUser.val().first_name;
							  that.userEmail = snapshotUser.val().email;
							  
							  
							  //check the console section of your browser inspect element
							  console.log( "user details: "+ snapshotUser.val() );
                         })
							  
                         
                         
                         
                    });
			});
}

}
