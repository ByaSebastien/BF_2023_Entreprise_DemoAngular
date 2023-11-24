import { AbstractControl, ValidatorFn } from "@angular/forms";


export function IsbnValidator(): ValidatorFn | null {
    return (control: AbstractControl) => {

        let value = control.value;

        if (value == null) {
            return null;
        }

        if (value.length == 11 || value.length == 13) {

            return null;
        }
        return { isbnError: 'ISBN doit être entre 11 et 13' };
    }
}