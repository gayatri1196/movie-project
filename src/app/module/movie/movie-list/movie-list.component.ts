import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/core/http.service';
import { fadeInItems } from '@angular/material';
import { IGenre } from '../models/genre.model';
import { IMovie } from '../models/movie.interface';
import { IMAGE_BASE_URL } from 'src/app/shared/constants/app.constants';
import { Router } from '@angular/router';
import { RouteEnum } from 'src/app/shared/enum/route.enum';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Input() genre: IGenre;
  @Input() set panelOpenState(value) {
    if (value === true) {
      this.init();
    }
  }
  moviesList: IMovie[];
  IMAGE_BASE_URL = IMAGE_BASE_URL;
  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {
  }
  init() {

    this.http.get(`https://api.themoviedb.org/3/genre/${this.genre.id}/movies`).subscribe(
      result => this.handleResponse(result)
    );
  }


  private handleResponse(result: any): void {
    // return console.log("data", result.genres);
    // this.genreList = result.genres;
    this.moviesList = result;
  }

  navigateToDetails(movie: IMovie) {
    this.router.navigate([`${RouteEnum.MOVIE_DETAILS_ROUTE}/${movie.id}`]);
  }
}
