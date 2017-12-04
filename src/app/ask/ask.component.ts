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

  constructor(private firebaseService:FirebaseService,  private router:Router) { }

  ngOnInit() {}

  submitAdd(){
   let post = {
     title: this.title,
     points: 0,
     description: this.description,
   }
   console.log('Post - ',post);
   this.firebaseService.addPost(post);
   this.router.navigate(['first']);
 }

}