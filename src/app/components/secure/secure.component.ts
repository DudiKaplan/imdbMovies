import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.model';
import { Category } from 'src/app/models/category.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddMovieDialogComponent } from '../add-movie-dialog/add-movie-dialog.component';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {

  constructor(private loginService: LoginService,
    private movieService: MovieService,
    private router: Router,
    public dialog: MatDialog) { }

  isLogin: boolean;
  user: string;
  allMovies: Movie[];
  currentMovies: Movie[];
  categories: Category[];
  currentCategory: string;

  ngOnInit() {
    this.movieService.getAllMovies()
      .subscribe(m => {
        this.allMovies = m;
        this.movieService.getAllCategories()
          .subscribe(c => {
            this.categories = c;
            this.updateCategoriesMovies()

            this.currentCategory = "action"
            this.updateCurrentMovies(this.currentCategory);
          })
      })

    this.isLogin = this.loginService.isLogin;
    this.user = this.loginService.user;
  };

  //the currnet show movies
  updateCurrentMovies(category: string) {
    const currentMovies = this.allMovies.filter(m => m.movieCategory === category);
    this.currentMovies = this.shortMoviesByDate(currentMovies).reverse();
    this.currentCategory = category;
  };

  //update categories to show
  updateCategoriesMovies(): void {
    this.categories.forEach(c => {
      c.movies = this.allMovies.filter(m => m.movieCategory === c.categoryName);
    })
  };

  deleteMovie(movieName: string) {
    this.allMovies.forEach((m, i) => {
      if (m.movieName === movieName) {
        this.allMovies.splice(i, 1);
      }
    })

    this.currentMovies.forEach((m, i) => {
      if (m.movieName === movieName) {
        this.currentMovies.splice(i, 1);
      }
    })

    this.updateCategoriesMovies();
  };


  logout() {
    this.loginService.isLogin = false;
    this.router.navigate(['']);
  };

  openDialog(): void {
    const dialogRef = this.dialog.open(AddMovieDialogComponent, {
      width: '250px',
      data: { categories: this.categories, allMovies: this.allMovies, newMovie: new Movie() }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(JSON.stringify(result.newMovie))
        this.allMovies.push(result.newMovie);
        this.updateCategoriesMovies();
        this.updateCurrentMovies(this.currentCategory);
      }
    });
  };

  shortMoviesByDate(moviesArr: Movie[]): Movie[] {
    return moviesArr.sort((a, b) => { return new Date(b.movieDate).getTime() - new Date(a.movieDate).getTime() })
  };


}
