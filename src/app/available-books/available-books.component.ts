import { Component, OnInit } from '@angular/core';
import { AvailableBook } from '../models/available-book.model';
import { LibraryService } from '../services/library/library.service';

@Component({
  selector: 'app-available-books',
  templateUrl: './available-books.component.html',
  styleUrls: ['./available-books.component.scss']
})
export class AvailableBooksComponent implements OnInit {
    private availableBooks: AvailableBook[];
    private error: any;

    constructor(private libraryService: LibraryService) { }

    ngOnInit() {
        this.getAvailableBooks();
    }

    getAvailableBooks(): void {
        this.libraryService
            .getAvailableBooks()
            .then(books => this.availableBooks = books)
            .catch(error => this.error = error)
        ;
    }
}
