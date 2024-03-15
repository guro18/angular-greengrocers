import { Component } from '@angular/core';
import { ItemService } from '../services/itemService';
import { Item } from '../models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private readonly itemService: ItemService) {}
  get cartItems(): Item[] {
    return this.itemService.cart;
  }
}
