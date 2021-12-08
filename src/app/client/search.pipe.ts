import { Pipe, PipeTransform } from '@angular/core';
import { itemsList } from './components/main-page/main-page.component';
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(itemsList: itemsList[], itemName: string): any {
    if (!itemName.trim()) {
      return itemsList;
    }
    return itemsList.filter((item) => {
      return item.item.toLowerCase().includes(itemName.toLowerCase());
    });
  }
}
