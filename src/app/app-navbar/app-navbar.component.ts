import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { EventEmitter } from "events";
import { Router } from "@angular/router";
import { FirebaseService } from '../_services/firebase.service'

@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppNavbarComponent implements OnInit {

    constructor(private firebase: FirebaseService){

    }
    ngOnInit() {}

    logout(){
        this.firebase.logout()
    }
}
