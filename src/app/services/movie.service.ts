import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie } from "../models/movies"

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = "http://localhost:5000/api/movie";

  constructor(private http: HttpClient) { }

  list(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.baseUrl}/list`);
}

create(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${this.baseUrl}/create`, movie);
}

}
