import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertSchduleAirlineComponent } from './insert-schdule-airline.component';

describe('InsertSchduleAirlineComponent', () => {
  let component: InsertSchduleAirlineComponent;
  let fixture: ComponentFixture<InsertSchduleAirlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertSchduleAirlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertSchduleAirlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
