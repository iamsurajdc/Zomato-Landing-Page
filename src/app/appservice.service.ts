import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AppserviceService {
  collections: any;
  constructor(private http: HttpClient) {}

  APIUrl = 'https://developers.zomato.com/api/v2.1/collections?';
  // todoLimit = '?_limit=5';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'user-key': environment.ZOMATO_USER_KEY,
    }),
  };

  getCollections(cityId: any) {
    return this.http.get(`${this.APIUrl}city_id=${cityId}`, this.httpOptions);
  }
}
