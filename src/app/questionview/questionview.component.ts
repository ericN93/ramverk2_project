import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FirebaseService } from "../_services/firebase.service";

@Component({
  selector: 'app-questionview',
  templateUrl: './questionview.component.html',
  styleUrls: ['./questionview.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuestionviewComponent implements OnInit {

    id: any;
    thePost: any[];


    constructor(private firebaseService: FirebaseService,private router:Router,private route:ActivatedRoute) { }

    ngOnInit() {
      // get the book ID
      this.id = this.route.snapshot.params['id'];
      this.firebaseService.getPostDetails(this.id).subscribe(post => {
        this.thePost = post
      });
    }



}
