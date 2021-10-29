import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from "./form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormRoutingModule } from "./form-routing.module";
import { ProjectStepComponent } from './steps/project-step/project-step.component';
import { UserInfosStepComponent } from './steps/user-infos/user-infos-step.component';
import { ResultComponent } from './steps/result/result.component';

@NgModule({
  declarations: [
    FormComponent,
    ProjectStepComponent,
    UserInfosStepComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormRoutingModule
  ]
})
export class FormModule { }
