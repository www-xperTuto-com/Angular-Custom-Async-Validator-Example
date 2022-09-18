import {UserService} from "./user-service";
import {AbstractControl, AsyncValidatorFn, ValidationErrors} from "@angular/forms";
import {debounceTime, Observable, of} from "rxjs";

export function isEmailExistValidator(userService: UserService): AsyncValidatorFn {
  return (formControl: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    let emailValidation = null;
     userService.isEmailExist(formControl.value)
       .pipe(debounceTime(2000))
      .subscribe(isEmailExist => {
        if (isEmailExist) {
          emailValidation =  { "isEmailExist": true };
        }
      })

    return of(emailValidation);
  };
}
