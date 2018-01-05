/*import { TestBed, inject } from '@angular/core/testing';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { Subject } from 'rxjs/Subject';

import { AngularFireAuth } from "angularfire2/auth";

import { FirebaseService } from './firebase.service';

class MockAuthService {
    private getOnAuth = new Subject<string>();
    authState = this.getOnAuth.asObservable();

    temp(data) {
        this.getOnAuth.next(data);
    }

}


//
describe('Test: FirebaseService', () => {
    let fb: FirebaseService;
    let service: MockAuthService;

    const test: AngularFireAuth = {

    }
    beforeEach(() => {
        service = new MockAuthService();
        db: new dbMockup();
        fb = new FirebaseService(null,service);
    });
//
//     it('check authState', () => {
//         service.temp('123');
//         expect(fb.authState).toEqual('123')
//     });
//
//     it('check if authenticated', () => {
//         fb.authState = null;
//         expect(fb.authenticated()).toEqual(false);
//     });
//
//     it('check currentUser', () => {
//         fb.authState = true;
//         expect(fb.currentUser()).toEqual(true);
//     });
// //
// it('create user', () => {
//     fb.af['auth'] = {};
//     fb.af['auth']['createUserWithEmailAndPassword'] = () => {
//         return true;
//     }
//
//     expect(fb.signUp('1','2')).toEqual(true);
// });
//
    // it('sign in', () => {
    //     fb.af['auth'] = {};
    //     fb.af['auth']['signInWithEmailAndPassword'] = () => {
    //         return true;
    //     }
    //
    //     expect(fb.loginUser('1','2')).toEqual(true);
    // });
    //
    // it('sign in', () => {
    //     fb.af['auth'] = {};
    //     fb.af['auth']['signOut'] = () => {
    //         return true;
    //     }
    //
    //     expect(fb.logout()).toEqual(true);
    // });

// });
*/
