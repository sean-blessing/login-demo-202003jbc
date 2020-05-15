import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonResponse } from '../model/json-response.class';
import { Observable } from 'rxjs';
import { User } from '../model/user.class';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = "http://localhost:8080/users/";

  constructor(private http: HttpClient) { }

  login(u: User): Observable<JsonResponse> {
    return this.http.post(this.url + "login", u) as Observable<JsonResponse>;
  }

}
