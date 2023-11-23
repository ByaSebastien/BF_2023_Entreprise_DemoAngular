import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-demo-structural-directive',
  templateUrl: './demo-structural-directive.component.html',
  styleUrls: ['./demo-structural-directive.component.scss']
})
export class DemoStructuralDirectiveComponent implements OnInit {

  isDayTime: boolean = true;
  books!: Book[];

  ngOnInit(): void {
    this.books = [
      {
        isbn: '123',
        title: "l'art de la guerre",
        author: 'Sun tzu',
        description: '...',
        nbPage: 200
      },
      {
        isbn: '456',
        title: 'Les trois petit cochons',
        author: 'José',
      },
      {
        isbn: '789',
        title: 'Vacances au soleil',
        author: 'Georges',
        nbPage: 100
      }
    ]
  }

  toggleIsDayTime() {
    this.isDayTime = !this.isDayTime;
  }
}
