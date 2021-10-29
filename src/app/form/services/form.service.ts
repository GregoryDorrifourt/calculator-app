import {Inject, Injectable} from '@angular/core';
import {FormData} from "./form-data.interface";
import {STEP} from "../form.constants";
import {Subject} from "rxjs";
import {AbstractControl} from "@angular/forms";
import {DOCUMENT} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private STORAGE_KEY: string = "App_form";
  public currentStep: STEP = STEP.USER;
  private formData: FormData = {
    step: STEP.USER,
    data: {}
  }

  public formSub: Subject<FormData> = new Subject();

  constructor(@Inject(DOCUMENT) private document: Document) { }

  public init() {
    const savedFormData = localStorage.getItem(this.STORAGE_KEY);
    if (savedFormData) {
      this.formData = JSON.parse(savedFormData);
    }
  }

  public setData(data: { [key: string]: AbstractControl; }) {
    console.log(data, this.getNextStep() );
    this.formData = {
      data: {...this.formData.data, ...data},
      step: this.getNextStep()
    }
    this.updateFormSub();
  }

  public getFormData(): FormData {
    return this.formData;
  }

  public setCurrentStep(step: STEP) {
    this.currentStep = step;
  }

  public goToStep(step: STEP){
    this.formData = {
      ...this.formData,
      step: step
    }
    this.updateFormSub();
  }

  public clean() {
    this.formData = {
      step: STEP.USER, data: {}
    }
    localStorage.removeItem(this.STORAGE_KEY)
  }

  private updateFormSub(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.formData))
    this.formSub.next(this.formData);
  }

  private getNextStep(): STEP {
    switch(this.formData.step) {
      case STEP.USER:
        return STEP.PROJECT;
      case STEP.PROJECT:
        return STEP.RESULT;
      default:
        return STEP.USER;
    }
  }
}
