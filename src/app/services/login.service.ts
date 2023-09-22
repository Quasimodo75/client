import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
private url = 'http://localhost:9000/api/'
  constructor(private http:HttpClient) { }
  signIn(login:Login):Observable<any>{
    return this.http.post<any>(`${this.url}login`,login)
  }
}
