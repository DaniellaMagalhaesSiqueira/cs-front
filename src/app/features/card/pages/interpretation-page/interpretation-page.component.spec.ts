import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpretationPageComponent } from './interpretation-page.component';

describe('InterpretationPageComponent', () => {
  let component: InterpretationPageComponent;
  let fixture: ComponentFixture<InterpretationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpretationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpretationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
