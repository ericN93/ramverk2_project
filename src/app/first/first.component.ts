import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { FirebaseService } from "../_services/firebase.service";
import { Router, ActivatedRoute} from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FirstComponent implements OnInit {
    allPosts: any;
    user: any;


    constructor(private firebaseService: FirebaseService, public af: AngularFireAuth, private router: Router) {
        this.user = this.firebaseService.currentUser()
    }


    ngOnInit() {
        this.firebaseService.getBooks().subscribe(posts =>{
          this.allPosts = posts;
      });
    }
  }
