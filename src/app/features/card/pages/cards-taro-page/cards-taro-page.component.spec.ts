import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsTaroPageComponent } from './cards-taro-page.component';

describe('CardsTaroPageComponent', () => {
  let component: CardsTaroPageComponent;
  let fixture: ComponentFixture<CardsTaroPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsTaroPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsTaroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
