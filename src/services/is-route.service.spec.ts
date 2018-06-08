import { TestBed, inject } from '@angular/core/testing';

import { IsRouteService } from './is-route.service';

describe('IsRouteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsRouteService]
    });
  });

  it('should be created', inject([IsRouteService], (service: IsRouteService) => {
    expect(service).toBeTruthy();
  }));
});
