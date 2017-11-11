import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

/*
  Generated class for the UsersserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersserviceProvider {

  public data: any;
  public fireAuth: any;
  public userProfile: any;
  public userdate: any;

  constructor(public http:Http) {
  
  this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('users');
    this.userdate = firebase.database().ref('usersdate');
  }

  loginUserService(email: string, password: string): any {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }
viewUser(userId: any){
    var userRef = this.userProfile.child(userId);
      return userRef.once('value');
}

view1User(userId: any){
  var userRef = this.userdate.child(userId);
    return userRef.once('value');
}

logoutUser(){
  return this.fireAuth.signOut();
}
  signupUserService(account: {}){
    
        
            return this.fireAuth.createUserWithEmailAndPassword(account['email'], account['password']).then((newUser) => {
              //sign in the user
              this.fireAuth.signInWithEmailAndPassword(account['email'], account['password']).then((authenticatedUser) => {
                //successful login, create user profile
              this.userProfile.child(authenticatedUser.uid).set(
                account
              );
              });
            });
    
      }

      dateleaveUserService(account: {}){
        
            
                return this.fireAuth.createUserWithEmailAndPassword(account['date'], account['date1']).then((newUser) => {
                  //sign in the user

                  this.userdate.child(newUser.uid).set(
                    account
                  );
                  });
                }
        
          
    }
