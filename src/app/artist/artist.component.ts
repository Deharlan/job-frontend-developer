import { Router, ActivatedRoute } from '@angular/router';
import { ArtistData, ArtistDataAttraction } from './../../models/artist.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  artist: ArtistDataAttraction;
  youtubeUrl: string;
  safeUrl;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private _sanitizer: DomSanitizer) {}

  getArtist(word: string) {
    const url =
    'https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=uf7o3qhkXPLwY8b7ZDbgkMyGnD2zFPCS&keyword=' +
    word;
    this.http.get(url).subscribe((data: ArtistData) => {
      this.artist = data._embedded.attractions[0];
    });
  }

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.youtubeUrl = 'https://www.youtube.com/embed/?listType=search&list=' + this.route.snapshot.paramMap.get('id');
      this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrl);
      this.getArtist(this.route.snapshot.paramMap.get('id'));
    });
  }
}
