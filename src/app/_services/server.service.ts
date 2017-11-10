import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServerService {

  constructor(private http: HttpClient) { }

  public getPost() {
    return this.http.get('http://localhost:3007/api/posts');
  }

}
