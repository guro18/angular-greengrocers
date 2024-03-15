import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
    itemsList: Item[] = [];
    cart: Item[] = [];
    total: number = 0;

  constructor(private readonly http: HttpClient) {
    this.getVegetablesAndFruits().then(items => {
      this.itemsList = items;
      console.log("itemList", this.itemsList);
    });
  }

    getVegetablesAndFruits(): Promise<Item[]> {
        const vegetablesPromise = this.http.get<Item[]>
        ('https://boolean-api-server.fly.dev/groceries?type=vegetable');
        const fruitsPromise = this.http.get<Item[]>
        ('https://boolean-api-server.fly.dev/groceries?type=fruit');

        return Promise.all([firstValueFrom(vegetablesPromise), firstValueFrom(fruitsPromise)]).then(([vegetables, fruits]) => {
            return [...vegetables, ...fruits];
        });
    }

    addToCart(item: Item): void {
      const existingCartItem = this.cart.find(cartItem => cartItem.id === item.id);
      if (existingCartItem) {
        existingCartItem.quantity++;
      }
      else{
        this.cart.push(item)
        item.quantity = 1;
      }
      this.total += item.price;
      console.log("total: ", this.total);
    }

    increaseQuantity(item: Item): void {
      const cartItem = this.cart.find(cartItem => cartItem.id === item.id);
      if (cartItem) {
        cartItem.quantity++;
        this.total += item.price;
      }
    }
  
    decreaseQuantity(item: Item): void {
      const cartItem = this.cart.find(cartItem => cartItem.id === item.id);
      if (cartItem) {
        if (cartItem.quantity > 1) {
          cartItem.quantity--;
          this.total -= item.price;
        } else {
          this.cart = this.cart.filter(cartItem => cartItem.id !== item.id);
          this.total -= item.price;
        }
      }
      console.log("cart: ", this.cart);
    }
}