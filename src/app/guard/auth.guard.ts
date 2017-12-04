import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseService } from '../_services/firebase.service';
import {MatSnackBar} from '@angular/material';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: FirebaseService, private router: Router, public snackBar: MatSnackBar) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
       if(this.auth.authState == null){
           console.log('in authguard if')
           this.router.navigate(['/login']);
           this.openSnackBar()

           return false;
       } else{
           return true;
       }
    }

    openSnackBar() {
        this.snackBar.open('You have to be logged in!', 'Ok', {
          duration: 2000,
        });
    }
}
