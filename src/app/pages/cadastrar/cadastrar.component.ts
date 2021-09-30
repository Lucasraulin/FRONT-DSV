import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movies';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  name!: string;
  genre!: string;
  rating!: string;
  director!: string;

  constructor(private router: Router, private service: MovieService) { }

  ngOnInit(): void {}

  cadastrar(): void {
    let movie: Movie = {
        name: this.name,
        genre: this.genre,
        rating: this.rating,
        director: this.director
    };
    this.service.create(movie).subscribe((movie) => {
        console.log(movie);
        this.router.navigate(["movie/listar"]);
    });
}

}
