import { Router } from '@angular/router';
import { Component, OnInit, Input, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { IsRouteService } from '../../services/is-route.service';
import { Subscription } from 'rxjs';
// import { FormControl } from '@angular/forms';
// import { Artist } from '../../models/artist.model';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  providers: [IsRouteService]
})
export class SearchFormComponent implements OnInit {
  @Input() artist: string;
  subscription: Subscription;

  constructor(private router: Router) {}

  onChange(value) {
    console.log(value);
    if (value === '') {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/artists/' + value]);
    }
  }

  ngOnInit() {}
}
