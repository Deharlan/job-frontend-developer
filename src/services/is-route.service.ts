import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsRouteService {

  private isRoute = new Subject<string>();

  isRoute$ = this.isRoute.asObservable();

  constructor() { }

  setRoute(path: string) {
    this.isRoute.next(path);
  }

}
