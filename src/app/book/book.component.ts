import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { LibraryService } from '../services/library/library.service';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
    private books: Book[];
    private error: any;

    constructor(private libraryService: LibraryService) { }

    ngOnInit() {
        this.getBooks();
    }

    getBooks(): void {
        this.libraryService
            .getBooks()
            .then(books => this.books = books)
            .catch(error => this.error = error)
        ;
    }
}
