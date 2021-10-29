import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfosStepComponent } from './user-infos-step.component';
import {RouterTestingModule} from "@angular/router/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('UserInfosStepComponent', () => {
  let component: UserInfosStepComponent;
  let fixture: ComponentFixture<UserInfosStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule, ReactiveFormsModule
      ],
      declarations: [ UserInfosStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfosStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
