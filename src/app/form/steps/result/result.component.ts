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
    console.log('formData : ', this.formData);

    if (this.formData.owner) {
      const projectCost: number = (Number(this.formData.surface) * this.pricePerM2);
      const income: number = Number(this.formData.income);
      const effyHelp = (projectCost*0.75)-((income/Number(this.formData.peopleInHouse))*0.15);

      this.effyHelp = ((projectCost*0.75)-((income/Number(this.formData.peopleInHouse))*0.15)).toFixed(2)

      this.isEligible = (effyHelp > 0);

    } else {
      this.isEligible = false;
    }
  }

  public reset() {
    this.formService.goToStep(STEP.PROJECT);
  }

}
