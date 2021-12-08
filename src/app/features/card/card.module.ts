import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsTaroPageComponent } from './pages/cards-taro-page/cards-taro-page.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { InterpretationPageComponent } from './pages/interpretation-page/interpretation-page.component';



@NgModule({
  declarations: [
    CardsTaroPageComponent,
    CardComponent,
    CardsListComponent,
    InterpretationPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CardModule { }
