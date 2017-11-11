import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PostsServiceProvider} from '../../providers/posts-service/posts-service';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';
import { LoginPage } from '../login/login';

/**
 * Generated class for the AcademicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-academic',
  templateUrl: 'academic.html',
})
export class AcademicPage {
slides =[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private postsService: PostsServiceProvider,public usersService: UsersserviceProvider ) {
    this.slides.push('assets/img/exam-period1.png');
    this.slides.push('assets/img/program-area-exam1.png');
    this.slides.push('assets/img/faculty-school-exam1.png');
    this.slides.push('assets/img/university-exam1.png');
    this.slides.push('assets/img/board-studies1.png');
    this.slides.push('assets/img/university-graduate1.png');
    this.slides.push('assets/img/senate-meeting1.png');

      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcademicPage');
  }


  logUserOut(){
    //call user service
    this.usersService.logoutUser().then (() =>{
      this.navCtrl.setRoot(LoginPage);
    });

    
  }
}


