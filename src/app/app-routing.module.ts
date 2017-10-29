import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookComponent } from './book/book.component';
import { AvailableBooksComponent } from './available-books/available-books.component';

const routes: Routes = [
    { path: '', redirectTo: '/book', pathMatch: 'full'},
    { path: 'book', component: BookComponent},
    { path: 'available-books', component: AvailableBooksComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
