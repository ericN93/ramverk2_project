import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as Rx from 'rxjs/Rx';


@Injectable()
export class ServerService {


	constructor(private http: HttpClient) { }


}
