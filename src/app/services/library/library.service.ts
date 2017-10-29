import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import Config from '../../config/config';
import { Book } from '../../models/book.model';
import { AvailableBook } from '../../models/available-book.model';

@Injectable()
export class LibraryService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private libraryUrl = Config.URL;

    constructor(private http: Http) { }

    getBooks(): Promise<Book[]> {
        return this.http.get(`${this.libraryUrl}books`)
            .toPromise()
            .then(response => response.json() as Book[])
            .catch(this.handleError)
    }

    getAvailableBooks(): Promise<AvailableBook[]> {
        return this.http.get(`${this.libraryUrl}available-books`)
            .toPromise()
            .then(response => response.json() as AvailableBook[])
            .catch(this.handleError)
    }

    getBook(bookId: number): Promise<Book> {
        return this.http.get(`${this.libraryUrl}book/${bookId}`)
            .toPromise()
            .then(response => response.json() as Book)
            .catch(this.handleError);
    }

    private handleError (error: any): Promise<any> {
        console.error('an error occured', error);
        return Promise.reject(error.message || error);
    }
}

/*

{
    "title": "My sample book",
    "author": "Noor Sheikkh",
    "isbn_number": "1234561212",
    "copies": [
        {
            "copy_number": 123
        },
        {
            "copy_number": 456
        },
        {
            "copy_number": 789
        }
    ]
}

*/
