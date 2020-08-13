import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/material.module';
import { MovieListComponent } from './module/movie/movie-list/movie-list.component';
import { HttpService } from './core/http.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpConfigInterceptor } from './core/interceptor/http-config.interceptor';
import { GenresComponent } from './module/movie/genres/genres.component';
import { MovieDetailsComponent } from './module/movie/movie-details/movie-details.component';
import { MovieItemComponent } from './module/movie/movie-list/movie-item/movie-item.component';

@NgModule({
  declarations: [
    AppComponent, MovieListComponent, GenresComponent, MovieDetailsComponent, MovieItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,

  ],
  providers: [HttpService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
