import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FirstComponent implements OnInit {
    tempObservable:Observable<any[]>;

    constructor(private db: AngularFireDatabase) { }

    ngOnInit() {
        this.tempObservable = this.getTemp('/forum');
    }

    getTemp(listPath): Observable<any[]>{

        return this.db.list(listPath).valueChanges();

    }

}
