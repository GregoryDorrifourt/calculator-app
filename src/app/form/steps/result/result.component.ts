import { Component, OnInit } from '@angular/core';
import {CIVILITY, CivilityLabel, STEP} from "../../form.constants";
import {StepClass} from "../step.class";
import {Form} from "../../services/form-data.interface";

@Component({
  selector: 'app-success',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent extends StepClass implements OnInit {

  public formData: Form | null = null;
  public isEligible: boolean = false;
  public effyHelp: string = '';
  private pricePerM2: number = 80;

  public get civility(): string {
    return this.formData ? CivilityLabel[this.formData.civility as CIVILITY] : '';
  }


  ngOnInit(): void {
    this.formService.setCurrentStep(STEP.RESULT);
    this.formData = this.formService.getFormData().data;

    if (this.formData.owner) {
      const projectCost: number = (Number(this.formData.surface) * this.pricePerM2);
      const income: number = Number(this.formData.income);
      const _effyHelp: number = (projectCost*0.75)-((income/Number(this.formData.peopleInHouse))*0.15);

      this.effyHelp = _effyHelp.toFixed(2)
      this.isEligible = (_effyHelp > 0);
    } else {
      this.isEligible = false;
    }
  }

  public reset() {
    this.formService.goToStep(STEP.PROJECT);
  }

}
