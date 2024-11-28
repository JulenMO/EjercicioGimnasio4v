import { TestBed } from '@angular/core/testing';

import { ActividadesInfoService } from './actividades-info.service';

describe('ActividadesInfoService', () => {
  let service: ActividadesInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActividadesInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
