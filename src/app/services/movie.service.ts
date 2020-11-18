import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { Category } from '../models/category.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getAllMovies(): Observable<Movie[]> {
    return new Observable(observer => {
      fetch("/assets/jsons/movies.json")
        .then(response => response.json())
        .then(data =>
          observer.next(data))
        .catch(err =>
          observer.error(err))
    })
  }

  getAllCategories() :Observable<Category[]>{
    return new Observable(observer =>{
      fetch("/assets/jsons/categories.json")
        .then(response => response.json())
        .then(data => 
          observer.next(data))
        .catch(err => 
          observer.error(err))
    })
  }

  movieUrlExists(url):Observable<any> {
    return new Observable(observer =>{
      fetch(url,{mode: "no-cors"} )
        .then(res => 
          observer.next(true))
        .catch(err => 
          observer.error(false))
    })
  }
}
