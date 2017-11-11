import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,AlertController, ViewController } from 'ionic-angular';
import * as firebase from 'firebase';
import { PostsServiceProvider } from '../../providers/posts-service/posts-service';

/**
 * Generated class for the PostAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-add',
  templateUrl: 'post-add.html',
  providers: [PostsServiceProvider]
})
export class PostAddPage {

  private postTitle :any;
  private postBody :any;
  private userId :any;
  private date1 :any;
  private date2 :any;
  private lecturer :any;
  private slecturer :any;
 

  
  
    constructor(private navCtrl: NavController, private loadingCtrl: LoadingController,private viewCtrl: ViewController, private postsService: PostsServiceProvider, private alertCtrl: AlertController ) {
     this.userId = firebase.auth().currentUser.uid; //user id of current logged in user
    }
  

    
    onChange(SelectedValue){
      console.log("Selected lecturer", SelectedValue);
      }
  
  
  
  addNewPost(){
    
     //add preloader
              let loading = this.loadingCtrl.create({
          dismissOnPageChange: true,
          content: 'Updating..'
        });
         loading.present();
         
         
    //call the service
    this.postsService.createPostService(this.userId, this.postBody, this.date1, this.date2, this.lecturer, this.slecturer,).then(() => {
    
    //clear the fields
    this.postBody = "";
    this.date1 = "";
    this.date2 = "";
    this.lecturer = "";
    this.slecturer = "";

  
   
    
    
     //add toast
                     loading.dismiss().then(() => {
                       //show pop up
                         let alert = this.alertCtrl.create({
                  title: 'Done!',
                  subTitle: 'Submitted',
                  buttons: ['OK']
                });
                alert.present();
                     })
    
    
    //close the popup
    this.viewCtrl.dismiss();
    
      
      }, error => {
                  //show pop up
                  loading.dismiss().then(() => {
                let alert = this.alertCtrl.create({
                  title: 'Error adding new date',
                  subTitle: error.message,
                  buttons: ['OK']
                });
                alert.present();
             })
   
        
                });
    
  }
  
  
  
  }
