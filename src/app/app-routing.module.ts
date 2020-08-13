import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteEnum } from './shared/enum/route.enum';
import { MovieListComponent } from './module/movie/movie-list/movie-list.component';
import { GenresComponent } from './module/movie/genres/genres.component';
import { MovieDetailsComponent } from './module/movie/movie-details/movie-details.component';

const routes: Routes = [
{ path: '', redirectTo: RouteEnum.MOVIE_LIST, pathMatch: 'full' },
// { path: RouteEnum.MOVIE_LIST, loadChildren: './module/movie/movie.module#MovieModule' }];
{ path: RouteEnum.MOVIE_LIST, component: GenresComponent },
{path: RouteEnum.MOVIE_DETAILS, component: MovieDetailsComponent} ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
