import { ArtistData, ArtistDataAttraction } from './../../models/artist.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArtistListService } from './../../services/artist-list.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {

  artists: ArtistDataAttraction[];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private artistList: ArtistListService
  ) {}

  getArtist(word: string) {
    const url =
      'https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=uf7o3qhkXPLwY8b7ZDbgkMyGnD2zFPCS&keyword=' +
      word;
    this.http.get(url).subscribe((data: ArtistData) => {
      console.log(data);
      console.log(data._embedded.attractions);
      this.artists = data._embedded.attractions;
    });
  }

  goToArtist(name: string) {
    this.router.navigate(['/artist/' + name]);
  }

  ngOnInit() {
    this.route.url.subscribe(url => {
      console.log('The URL changed to: ' + url);
      this.getArtist(this.route.snapshot.paramMap.get('id'));
    });
  }
}
