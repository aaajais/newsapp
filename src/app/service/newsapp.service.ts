import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsappService {

  constructor(private _http:HttpClient) { }

  headlineNews="https://newsapi.org/v2/top-headlines?country=us&apiKey=eebb024f640042d8a6c1a377c29a4adb"
  // headlineNews="https://newsapi.org/v2/everything?q=bitcoin&apiKey=eebb024f640042d8a6c1a377c29a4adb"
  headline():Observable<any>{
    return this._http.get(this.headlineNews)
  }
}
