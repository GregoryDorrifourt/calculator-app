export enum STEP {
  USER= '/',
  PROJECT= '/projet',
  RESULT = '/resultat'
}

export enum CIVILITY {
  MR= 'mr',
  MRS= 'mrs'
}

export const CivilityLabel = {
  [CIVILITY.MR]: 'Monsieur',
  [CIVILITY.MRS]: 'Madame'
}

export const mailRegEx: RegExp = /^([a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*@([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*\.(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]){2,})$/i;
export const phoneRegEx: RegExp = /^0[1-9]{1}[0-9]{8}$/;
