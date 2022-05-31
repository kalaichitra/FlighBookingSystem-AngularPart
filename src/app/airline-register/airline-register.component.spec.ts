import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineRegisterComponent } from './airline-register.component';

describe('AirlineRegisterComponent', () => {
  let component: AirlineRegisterComponent;
  let fixture: ComponentFixture<AirlineRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirlineRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlineRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
