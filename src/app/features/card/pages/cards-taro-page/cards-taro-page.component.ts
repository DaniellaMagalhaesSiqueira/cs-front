import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../../model/card.model';
import { CardService } from '../../services/card.service';

@Component({
  templateUrl: './cards-taro-page.component.html',
  styleUrls: ['./cards-taro-page.component.scss']
})
export class CardsTaroPageComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
  }

}
