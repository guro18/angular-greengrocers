import { Component } from '@angular/core';
import { ItemService } from '../services/itemService';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent {
  constructor(private readonly itemService: ItemService) {}
  items = this.itemService.itemsList;

  ngOnInit(): void {
    this.itemService.getVegetablesAndFruits().then(items => {
      this.items = items;
      console.log("items: ", this.items);
    });
  }
}
