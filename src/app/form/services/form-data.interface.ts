import {CIVILITY, STEP} from "../form.constants";

export interface FormData {
  step: STEP;
  data: Form;
}

export interface Form {
  civility?: CIVILITY;
  lastname?: string;
  firstname?: string;
  email?: string;
  phone?: string;
  owner?: boolean;
  peopleInHouse?: number;
  income?: number;
  surface?: number;
}
