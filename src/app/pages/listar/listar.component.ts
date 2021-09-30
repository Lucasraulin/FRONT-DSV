import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movies';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.service.list().subscribe((movies) => {
       this.movies = movies;
    });
  }
}
