import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FirebaseService } from '../_services/firebase.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  success: string;
  error: any;

  constructor(private firebase:FirebaseService, private router: Router) {
   }

  ngOnInit() {

  }

  loginUser(){
    this.firebase.loginUser(this.username, this.password).then((user) => {
       console.log('success')
       this.router.navigate(['first']);
    }).catch((error) => {
      this.error = error;
      console.log(this.error);
    });
  }

}
