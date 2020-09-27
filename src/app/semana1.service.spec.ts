import { TestBed } from '@angular/core/testing';

import { Semana1Service } from './semana1.service';

describe('Semana1Service', () => {
  let service: Semana1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Semana1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
