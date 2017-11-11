import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';
//import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import {SplashScreen} from '@ionic-native/splash-screen';
import { SignupPage } from '../signup/signup';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UsersserviceProvider]
})
export class LoginPage {

  public email: string;
  public password: string;

  constructor(public userService: UsersserviceProvider, public toastCtrl: ToastController, public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, private splashScreen: SplashScreen) {

  
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  submitLogin(){

    var that = this;

    var loader = this.loadingCtrl.create({
      content: "please wait..."
    });
    loader.present();

    this.userService.loginUserService(this.email, this.password).then(authData =>{
      //successful!
      loader.dismiss();
      that.navCtrl.setRoot(ProfilePage);

    }, error =>{
  loader.dismiss();
      //Unable to log in
        let toast = this.toastCtrl.create({
          message: error,
          duration: 3000,
          position: 'top'
        });
        toast.present();

    that.password = ""//empty the password field
    });
  }

  forgotpassword(){

  }

  redirectToSignup(){
      this.navCtrl.push(SignupPage);
  }
}
