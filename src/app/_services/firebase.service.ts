import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from "angularfire2/auth";
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { Router } from '@angular/router';


@Injectable()
export class FirebaseService {

  authState: any = null
  posts: FirebaseListObservable<any[]>;
  postDetails: Observable<any[]>;

  users: FirebaseListObservable<any>;
  displayName: string;
  email: string;
  user: FirebaseObjectObservable<any>;

    constructor(private db: AngularFireDatabase, public af: AngularFireAuth) {
        this.af.authState.subscribe((auth) => {
             this.authState = auth;
             console.log(this.authState)
            if(this.authState == null){
                console.log('in if')
                //this.router.navigate(['/login']);
            }


        })
    }

    // Returns true if user is logged in
    authenticated(): boolean {
      return this.authState !== null;
    }

    // Returns current user data
    currentUser(): any {
      return this.authenticated ? this.authState : null;
    }

    // Returns
    currentUserObservable(): any {
      return this.af.authState;
    }

    // Returns current user UID
    currentUserId(): string {
      return this.authenticated ? this.authState.uid : '';
    }

  signUp(email, password){
    return this.af.auth.createUserWithEmailAndPassword(email,password);
  }

  loginUser(email, password){
    return this.af.auth.signInWithEmailAndPassword(email, password);
  }

  logout(){
    return this.af.auth.signOut();
  }

  addUserInfo(){
      this.users.push({
        email: this.email,
        displayName: this.displayName
      });
  }

  getPost() {
    this.posts = this.db.list('/forum') as FirebaseListObservable<any[]>;
    return this.posts;
  }

  getPostDetails(id){
   this.postDetails = this.db.object('/forum/'+id) as Observable<any[]>;
   return this.postDetails;
 }

 addPost(postDetails){
    var filteredPost = JSON.parse(JSON.stringify(postDetails));
    console.log('Filtered Post - ',filteredPost);
    return this.posts.push(filteredPost);
  }

  updatePost(id, postDetails){
    var filteredPost = JSON.parse(JSON.stringify(postDetails));
    return this.posts.update(id,filteredPost);
  }

  deletePost(id){
    return this.posts.remove(id);
  }


}
