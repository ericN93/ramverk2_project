import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FirebaseService } from "../_services/firebase.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AskComponent implements OnInit {

  title;
  points;
  description;
  user: any;


  constructor(private firebaseService:FirebaseService,  private router?:Router) {
      this.user = this.firebaseService.currentUser()
  }

  ngOnInit() {}

  submitAdd(){
   let post = {
     title: this.title,
     description: this.description,
     author: this.user.email,
   }
   console.log('Post - ',post);
   this.firebaseService.addPost(post);
   this.router.navigate(['first']);
 }

}
