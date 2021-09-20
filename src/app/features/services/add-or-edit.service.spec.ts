import { TestBed } from '@angular/core/testing';

import { AddOrEditService } from './add-or-edit.service';

describe('AddOrEditService', () => {
  let service: AddOrEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddOrEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
