import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineMgmtComponent } from './airline-mgmt.component';

describe('AirlineMgmtComponent', () => {
  let component: AirlineMgmtComponent;
  let fixture: ComponentFixture<AirlineMgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirlineMgmtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlineMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
