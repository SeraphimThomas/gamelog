import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {
    static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
          if (!control.value) {
            // if control is empty return no error
            return null as any;
          }
      
          // test the value of the control against the regexp supplied
          const valid = regex.test(control.value);
      
          // if true, return no error (no error), else return error passed in the second parameter
          return valid ? null as any : error;
        };
      }

      static passwordMatchValidator(control: AbstractControl){
        const password: string = control.get('password')?.value;
        const confirmPassword: string = control.get('confirmPassword')?.value;
        console.log(password);
        if (password !== confirmPassword){
          control.get('confirmPassword')?.setErrors({ NoPasswordMatch: true });
        }
      }
      
}
