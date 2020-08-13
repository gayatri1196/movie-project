import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteEnum } from 'src/app/shared/enum/route.enum';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';


const routes: Routes = [
  { path: RouteEnum.EMPTY, component: MovieListComponent },
  { path: RouteEnum.MOVIE_DETAILS, component: MovieDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
