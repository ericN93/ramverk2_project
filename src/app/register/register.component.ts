import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FirebaseService } from "../_services/firebase.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;
  error:any;
  success: string;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  registerUser(){
     this.firebaseService.signUp(this.email, this.password).then((user) => {
        console.log('success')
        this.success= "Your account were successfully created"
     }).catch((error) => {
       this.error = error;
       console.log(this.error);
     });
  }
}
