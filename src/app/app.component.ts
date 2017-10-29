import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from './models/book.model';
import { AvailableBook } from './models/available-book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) { }

  ngOnInit() {
  }
}
