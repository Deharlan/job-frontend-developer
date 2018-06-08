import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistListService {
  configUrl = 'https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=uf7o3qhkXPLwY8b7ZDbgkMyGnD2zFPCS&keyword=';

  constructor(private http: HttpClient) {}

  getArtistList(word: string) {
    return this.http.get(this.configUrl + word);
  }
}
