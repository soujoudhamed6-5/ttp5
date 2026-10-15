import { Component, output,input } from '@angular/core';
import { Pizza } from '../../models/pizza';
@Component({
  imports: [],
  selector: 'abc-pizza-item',
  styleUrl: './pizza-item.css',
  templateUrl: './pizza-item.html',
})
export class PizzaItem {
  pizza=input.required<Pizza>();
  delete=output<number>();
  supprimerPizza() {
    this.delete.emit(this.pizza().id);
  }
}
