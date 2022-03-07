import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }

  getDataMovies():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/movie/now_playing?api_key=fdbf25e22fb4b9c4e42746dd6346b0f2&language=en-US&page=1')
  }
}
