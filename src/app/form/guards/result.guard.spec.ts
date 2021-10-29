import { TestBed } from '@angular/core/testing';

import { ResultGuard } from './result.guard';
import {RouterTestingModule} from "@angular/router/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('ResultGuard', () => {
  let guard: ResultGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ]
    });
    guard = TestBed.inject(ResultGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
