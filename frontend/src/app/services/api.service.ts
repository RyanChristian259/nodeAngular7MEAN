import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {
  public messages: any;
  constructor(private http: HttpClient) {}

  public getMessages(): Observable<any> {
    return this.http.get('http://localhost:3000/posts').pipe(
      map(data => data));
  }


}
