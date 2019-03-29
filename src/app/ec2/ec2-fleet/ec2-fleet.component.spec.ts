import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2FleetComponent } from './ec2-fleet.component';

describe('Ec2FleetComponent', () => {
  let component: Ec2FleetComponent;
  let fixture: ComponentFixture<Ec2FleetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2FleetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2FleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
