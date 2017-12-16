import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { FirebaseService } from './_services/firebase.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isLoggedIn: boolean;


  constructor(private firebase:FirebaseService, private router: Router, public af: AngularFireAuth){

  }

}
