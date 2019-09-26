import { Pipe, PipeTransform } from '@angular/core';
import { ICard } from '../models/ICardList';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(cards: ICard[], searchString: string): ICard[] {
    console.log(searchString, cards.filter(card => card.name.indexOf(searchString) !== -1));
    return searchString
      ?cards.filter(card => card.name.indexOf(searchString) !== -1)
      :cards;
  }
}
