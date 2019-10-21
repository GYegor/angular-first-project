import { TestBed } from '@angular/core/testing';

import { TaskCardListsService } from '../../board/services/task-card-lists.service';

describe('TaskCardListsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskCardListsService = TestBed.get(TaskCardListsService);
    expect(service).toBeTruthy();
  });
});
