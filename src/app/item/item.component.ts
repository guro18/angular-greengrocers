import { Component, Input } from '@angular/core';
import { Item } from '../models/item';
import { ItemService } from '../services/itemService';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input('item') item: Item | null = null;
  constructor(private itemService: ItemService) {}

  getImageUrl(): string {
    if (this.item) {
      return `assets/icons/${this.item.id}.svg`;
    }
    return ''; // Return a default image or empty string if item is null
  }

  addToCart(): void {
    if (this.item) {
      this.itemService.addToCart(this.item);
    }
  }
}
