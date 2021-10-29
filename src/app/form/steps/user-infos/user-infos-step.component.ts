import {Component, OnInit} from '@angular/core';
import {StepClass} from '../step.class';
import {CIVILITY, CivilityLabel, mailRegEx, phoneRegEx, STEP} from "../../form.constants";
import {FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-type-step',
  templateUrl: './user-infos-step.component.html',
  styleUrls: ['./user-infos-step.component.scss']
})
export class UserInfosStepComponent extends StepClass implements OnInit {

  public civilities: {value: string, label: string}[] = [
    {
      value: CIVILITY.MR,
      label: CivilityLabel[CIVILITY.MR]
    },
    {
      value: CIVILITY.MRS,
      label: CivilityLabel[CIVILITY.MRS]
    }
  ];

  public formGroup: FormGroup = this.formBuilder.group({
    civility: [null, Validators.required],
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(mailRegEx)]],
    phone: ['', [Validators.required, Validators.pattern(phoneRegEx)]]
  });

  ngOnInit(): void {
    this.formService.setCurrentStep(STEP.USER);
    this.formService.clean();
  }

}
