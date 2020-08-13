import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/http.service';
import { IGenre } from '../models/genre.model';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  genreList: IGenre[];
  panelOpenState = false;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.http.get('https://api.themoviedb.org/3/genre/movie/list').subscribe(
      result => this.handleResponse(result)
    );
  }


  private handleResponse(result: any): void {
    // return console.log("data", result.genres);
    this.genreList = result.genres;
  }

}
