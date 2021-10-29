import { TestBed } from '@angular/core/testing';

import { ProjectStepGuard } from './project-step.guard';

describe('ProjectStepGuard', () => {
  let guard: ProjectStepGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProjectStepGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
