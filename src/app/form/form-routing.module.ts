import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form.component';
import { ProjectStepComponent } from './steps/project-step/project-step.component';
import { UserInfosStepComponent } from './steps/user-infos/user-infos-step.component';
import { ResultComponent } from './steps/result/result.component';
import { ProjectStepGuard } from './guards/project-step.guard';
import { ResultGuard } from './guards/result.guard';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    children: [
      {
        path: '',
        component: UserInfosStepComponent
      },
      {
        path: 'projet',
        component: ProjectStepComponent,
        canActivate: [ProjectStepGuard]
      },
      {
        path: 'resultat',
        component: ResultComponent,
        canActivate: [ResultGuard]
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
