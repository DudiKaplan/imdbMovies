import { Component, Inject } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/models/category.model';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';


export interface DialogData {
  categories: Category[];
  allMovies: Movie[];
  newMovie: Movie;
}


@Component({
  selector: 'app-add-movie-dialog',
  templateUrl: './add-movie-dialog.component.html',
  styleUrls: ['./add-movie-dialog.component.css']
})
export class AddMovieDialogComponent {

  validationError = {
    nameError: '',
    posterError: '',
    urlError: '',
    categoryError: '',
    dateError: ''
  }
  spinner = false;

  constructor(
    public dialogRef: MatDialogRef<AddMovieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private movieService: MovieService) { }


  onNoClick(): void {
    this.dialogRef.close();
  }

  onAddClick(): void {


    if (!this.checkValidation()) {
      return;
    }

    this.spinner = true;

    this.movieService.movieUrlExists(this.data.newMovie.moviePoster)
      .subscribe(res =>{
        this.movieService.movieUrlExists(this.data.newMovie.movieUrl)
          .subscribe(url =>{
            this.spinner = false;
            this.dialogRef.close(this.data),
            err =>{
              this.validationError.urlError = 'קישור חייב להיות פעיל'
            }
          }),
          err => {
            this.validationError.posterError = 'פוסטר חייב להיות קישור תקין'
          }
      })

    
  }

  checkValidation(): boolean {

    let fleg = true;

    //validation novieName
    if (this.data.newMovie.movieName === '') {
      this.validationError.nameError = 'שם הסרט חייב להיות מלא*'
      fleg = false;
    } else if (!this.data.newMovie.movieName.match("^[a-zA-Z0-9\\s]+$")) {
      this.validationError.nameError = 'שם הסרט חייב להיות באנגלית*'
      fleg = false;
    } else if (this.movieExisits(this.data.newMovie.movieName)) {
      this.validationError.nameError = 'שם הסרט כבר קיים אצלנו*'
      fleg = false;
    }

    //validation movieCategory
    if (this.data.newMovie.movieCategory === '') {
      this.validationError.categoryError = 'חובה לבחור קטגוריה לסרט*'
      fleg = false;
    }

    //validation moviePoster
    if (this.data.newMovie.moviePoster === '') {
      this.validationError.posterError = 'פוסטר חייב להיות מלא*'
      fleg = false;
    } else if (!this.data.newMovie.moviePoster.includes("https://m.media-amazon.com/images") || !this.data.newMovie.moviePoster.endsWith((".jpg"))) {
      this.validationError.posterError = ' imdb קישור לפוסטר חייב להיות ל *'
      fleg = false;
    }
    // } else if (this.UrlExists(this.data.newMovie.moviePoster)) {
    //   this.validationError.posterError = 'פוסטר חייב להיות קישור תקין'
    //   fleg = false;
    // }

    //validation movie Url
    if (this.data.newMovie.movieUrl === '') {
      this.validationError.urlError = 'לינק חייב להיות מלא'
      fleg = false
    } else if (!this.data.newMovie.movieUrl.includes("https://www.imdb.com/video")) {
      this.validationError.urlError = ' imdb קישור חייב להיות ל *'
      fleg = false;
    }
    // } else if (!this.UrlExists(this.data.newMovie.movieUrl)) {
    //   this.validationError.urlError = 'קישור חייב להיות פעיל'
    //   fleg = false;
    // }

    //validation movieDate
    if (this.data.newMovie.movieDate === '') {
      this.validationError.dateError = 'תאריך חייב להיות מלא'
      fleg = false
    }
    return fleg;
  }

  clearErrors(errorName) {
    this.validationError[errorName] = '';
  };

  movieExisits(movieName: string): boolean {
    const found = this.data.allMovies.some(m => m.movieName === movieName);
    if (found) {
      return true;
    } else {
      return false;
    }
  }

}
