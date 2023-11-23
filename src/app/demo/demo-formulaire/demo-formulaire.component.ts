import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/models/book.model';
import { bookFormulaire } from './forms/bookForm';

@Component({
  selector: 'app-demo-formulaire',
  templateUrl: './demo-formulaire.component.html',
  styleUrls: ['./demo-formulaire.component.scss']
})
export class DemoFormulaireComponent implements OnInit {

  bookForm!: FormGroup;

  constructor(
    private readonly _fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.bookForm = this._fb.group({
      ...bookFormulaire
    });
  }

  onSubmit() {

    if (!this.bookForm.valid) {
      console.log('error');

      return;
    }
    let book: Book = this.bookForm.value;
    console.log(book);
  }


}
