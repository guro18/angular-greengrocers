import { Component, Input } from '@angular/core';
import { Item } from '../models/item';
import { ItemService } from '../services/itemService';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})

export class CartItemComponent {
  @Input('item') item: Item | null = null;

  constructor(private itemService: ItemService) {}

  getImageUrl(): string {
    if (this.item) {
      return `assets/icons/${this.item.id}.svg`;
    }
    return '';
  }

  increaseQuantity(): void {
    if (this.item) {
      this.itemService.increaseQuantity(this.item);
    }
  }

  decreaseQuantity(): void {
    if (this.item) {
      this.itemService.decreaseQuantity(this.item);
    }
  }
}
