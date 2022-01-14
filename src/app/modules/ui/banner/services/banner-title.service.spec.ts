/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BannerTitleService } from './banner-title.service';

describe('Service: BannerTitle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BannerTitleService]
    });
  });

  it('should ...', inject([BannerTitleService], (service: BannerTitleService) => {
    expect(service).toBeTruthy();
  }));
});
