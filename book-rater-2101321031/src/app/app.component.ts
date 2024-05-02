import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public bookIndex = 0;

  public books: Book[] = [
    new Book(
      'House of Leaves',
      'A debut novel by American author Mark Z. Danielewski, published in March 2000. The novel is written as a work of epistolary fiction and metafiction focusing on a fictional documentary film titled the Navidson Record.',
      'Mark Z. Danielewski'
    ),
    new Book(
      'Design Patterns: Elements of Reusable Object-Oriented Software',
      'A software engineering book describing software design patterns. The book was written by Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides, with a foreword by Grady Booch.',
      'Gang of Four'
    ),
    new Book(
      'Blind Willow, Sleeping Woman',
      'A collection of 24 short stories by Japanese author Haruki Murakami. The stories contained in the book were written between 1980 and 2005.',
      'Haruki Murakami'
    ),
    new Book(
      'Dance Dance Dance',
      'A novel by Haruki Murakami that explores the connectedness of life. The unnamed protagonist, a successful writer, revisits his past driven by forces from his subconscious and from, possibly, another dimension.',
      'Haruki Murakami'
    ),
    new Book(
      'Annihilation',
      'A science fiction novel by Jeff VanderMeer. The story follows a group of scientists who enter "The Shimmer", a mysterious quarantined zone of mutating plants and animals caused by an alien presence.',
      'Jeff VanderMeer'
    ),
  ];

  public rateBook(value: number) {
    this.books[this.bookIndex].addReview(value);

    if (this.bookIndex + 1 === this.books.length) {
      this.bookIndex = 0;
    } else {
      this.bookIndex++;
    }
  }
}

class Book {
  public name: string;
  public description: string;
  public author: string;
  public reviews: number[];

  public constructor(name: string, description: string, author: string) {
    this.name = name;
    this.description = description;
    this.author = author;
    this.reviews = [];
  }

  public addReview(value: number) {
    this.reviews.push(value);
  }

  public getAverageRating(): number {
    let length = this.reviews.length;
    if (length === 0) {
      return 0;
    }
    return this.reviews.reduce((p, c) => p + c, 0) / length;
  }
}
