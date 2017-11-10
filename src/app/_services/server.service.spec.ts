import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ServerService } from './server.service';


describe('ServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([ServerService], (service: ServerService) => {
    expect(service).toBeTruthy();
  }));
});
