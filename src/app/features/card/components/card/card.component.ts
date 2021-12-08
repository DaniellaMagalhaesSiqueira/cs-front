import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../../model/card.model';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  card?: Card;
  cards?: Array<Card> = this.cardService.getCards();
  flipped: boolean = false;
  constructor(
    private cardService: CardService,
    private router: Router
  ) {
    this.cardService.getCardsStream().subscribe((cards)=>{
      this.cards = cards;
    });
   }

  ngOnInit(): void {
  }

  clickCard(event: any){
    console.log(event);
    if(!this.flipped){

      const min = Math.ceil(-22);
      const max = Math.floor(22);
      const result = Math.trunc(Math.random() * (max - min) + min);
      
      if(result > 0){
        const number = Math.trunc(result);
        this.card = this.cardService.getCards().find((c)=> c.id === number);
      }
      if(result == 0){
        this.card = this.cardService.getCards().find((c)=> c.id === 1);
      }
      if(result < 0){
        const number = Math.trunc(result) * (-1);
        this.card = this.cardService.getCards().find((c)=> c.id === number);
        this.cardService.invertedCard(number);
      }
    }
    this.flipped = true;

  }
  
  navigate(card: Card){
    this.router.navigateByUrl(`interpretation/${card.id}`);
  }

}
