import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/http.service';
import { IMovie } from '../models/movie.interface';
import { IMAGE_BASE_URL } from 'src/app/shared/constants/app.constants';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieId: string;
  movieDetails: IMovie;
  IMAGE_BASE_URL = IMAGE_BASE_URL;

  constructor(private route: ActivatedRoute, private http: HttpService) {
    this.route.params.subscribe(
      params => {
        this.movieId = params.id;
      }
    );
  }

  ngOnInit() {
    this.http.get(`https://api.themoviedb.org/3/movie/${this.movieId}`).subscribe(
      result => this.handleResponse(result)
    );
  }


  private handleResponse(result: any): void {
    // return console.log("data", result.genres);
    // this.genreList = result.genres;
    this.movieDetails = result;
  }


}
