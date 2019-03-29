import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2SpotFleetComponent } from './ec2-spot-fleet.component';

describe('Ec2SpotFleetComponent', () => {
  let component: Ec2SpotFleetComponent;
  let fixture: ComponentFixture<Ec2SpotFleetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2SpotFleetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2SpotFleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
