import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';



@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {

  @Input()
  movie: Movie

  @Output() deleteMovieEvnet = new EventEmitter();

  deleteMovie() {
    this.deleteMovieEvnet.emit(this.movie.movieName)
  }

}
