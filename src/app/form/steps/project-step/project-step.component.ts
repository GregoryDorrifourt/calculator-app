import { Component, OnInit } from '@angular/core';
import {CivilityLabel, STEP} from "../../form.constants";
import {StepClass} from "../step.class";
import {FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-owner-step',
  templateUrl: './project-step.component.html',
  styleUrls: ['./project-step.component.scss']
})
export class ProjectStepComponent extends StepClass implements OnInit {

  public formGroup: FormGroup = this.formBuilder.group({
    owner: [false],
    peopleInHouse: [null, [Validators.required, Validators.min(1)]],
    income: [null, [Validators.required, Validators.min(10000), Validators.max(100000)]],
    surface: [null, [Validators.required, Validators.min(1)]]
  });

  ngOnInit(): void {
    this.formService.setCurrentStep(STEP.PROJECT);
  }

}
