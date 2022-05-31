import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineInsertComponent } from './airline-insert.component';

describe('AirlineInsertComponent', () => {
  let component: AirlineInsertComponent;
  let fixture: ComponentFixture<AirlineInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirlineInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlineInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
