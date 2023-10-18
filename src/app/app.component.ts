import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Wishlist';
  newWisth = '';
  items: WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Have a cup of coffiee', true),
    new WishItem('Kill the birds :D '),
  ];

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
  }

  addNewWish() {}
}
