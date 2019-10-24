import { TestBed } from '@angular/core/testing';

import { CardListsService } from './card-lists.service';

describe('CardListsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardListsService = TestBed.get(CardListsService);
    expect(service).toBeTruthy();
  });
});
