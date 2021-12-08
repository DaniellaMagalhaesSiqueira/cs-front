import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../../model/card.model';
import { CardService } from '../../services/card.service';

@Component({
  templateUrl: './interpretation-page.component.html',
  styleUrls: ['./interpretation-page.component.scss']
})
export class InterpretationPageComponent implements OnInit {

  card?: Card;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cardService: CardService,
  ) { 
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      
      this.card = this.cardService.getById(Number(params.id));
    });
    console.log(this.card);
  }

}
