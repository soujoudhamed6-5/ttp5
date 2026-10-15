import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PizzaItem } from './exercice/components/pizza-item/pizza-item';
import { PizzaList } from './exercice/components/pizza-list/pizza-list';

@Component({
  imports: [RouterOutlet,PizzaList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ttp5ex1');
}
