import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class UserService {
  public API = "//localhost:8080";

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
     return this.http.get(this.API+'/listuser');
  }
  get(id: string) {
    return this.http.get( this.API+'/get'+id);
  }
  edit(user: any): Observable<any> {
    let result: Observable<Object>;
    if (user['href']) {
      result = this.http.put(user.href, user)
    } else {
      result = this.http.post(this.API + '/edit', user)
    }
    return  result
  }

    delete(href: string) {
      return this.http.delete(href);
    }

  }

