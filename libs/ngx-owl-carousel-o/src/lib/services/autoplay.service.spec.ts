import { TestBed, inject } from '@angular/core/testing';

import { AutoplayService } from './autoplay.service';
import { DOCUMENT_PROVIDERS } from './document-ref.service';
import { WINDOW_PROVIDERS } from './window-ref.service';

describe('AutoplayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutoplayService, DOCUMENT_PROVIDERS, WINDOW_PROVIDERS]
    });
  });

  it('should be created', inject([AutoplayService], (service: AutoplayService) => {
    expect(service).toBeTruthy();
  }));
});