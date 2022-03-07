import { Component, OnInit } from '@angular/core';
import { Result } from '../interface/movie';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movieList:Result[]=[]

  constructor(private _moviesService:MoviesService) {
    _moviesService.getDataMovies().subscribe((data)=>{
      this.movieList=data.results
    })
  }

  ngOnInit(): void {
  }

}
