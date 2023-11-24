import { Validators } from "@angular/forms";
import { IsbnValidator } from "../validators/isbnValidator";

export const bookFormulaire = {
    isbn: [null, [Validators.required, IsbnValidator()]],
    title: [null, [Validators.required, Validators.maxLength(10)]],
    description: [null, []],
    author: [null, [Validators.required, Validators.maxLength(10)]],
    nbPage: [null, [Validators.min(1), Validators.pattern('[0-9]*')]]
}