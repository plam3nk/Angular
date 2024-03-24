import { ValidatorFn } from '@angular/forms';

export function matchPasswordValidator(
  passwordControlName: string,
  rePasswordControlName: string
): ValidatorFn {
  return (control) => {
    const passwordFormControl = control.get(passwordControlName);
    const rePasswordFormControl = control.get(rePasswordControlName);

    const areMatching =
      passwordFormControl?.value == rePasswordFormControl?.value;
    console.log({ areMatching });

    return areMatching ? null : { matchPasswordValidator: true };
  };
}
