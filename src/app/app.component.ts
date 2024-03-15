import { Component } from '@angular/core';
import { ItemService } from './services/itemService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private readonly itemService: ItemService) {}
  title = 'angular-green-grocers';
  
  get total(): number {
    return Number(this.itemService.total.toFixed(2));
  }
}
