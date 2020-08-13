import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieItemComponent } from './movie-list/movie-item/movie-item.component';
import { GenresComponent } from './genres/genres.component';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
