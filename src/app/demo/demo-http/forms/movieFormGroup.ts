import { Validators } from "@angular/forms";

export const MovieFormGroup = {
    title: [null, [Validators.required]],
    author: [null, [Validators.required]]
}