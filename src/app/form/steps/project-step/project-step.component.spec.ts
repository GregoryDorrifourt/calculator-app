import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStepComponent } from './project-step.component';
import {RouterTestingModule} from "@angular/router/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('ProjectStepComponent', () => {
  let component: ProjectStepComponent;
  let fixture: ComponentFixture<ProjectStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule, ReactiveFormsModule
      ],
      declarations: [ ProjectStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
