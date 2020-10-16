import { TestBed } from '@angular/core/testing';

import { PaginatedPostsService } from './paginated-posts.service';

describe('PaginatedPostsService', () => {
  let service: PaginatedPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginatedPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
