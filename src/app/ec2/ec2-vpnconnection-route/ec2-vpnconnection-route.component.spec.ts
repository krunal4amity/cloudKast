import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2VPNConnectionRouteComponent } from './ec2-vpnconnection-route.component';

describe('Ec2VPNConnectionRouteComponent', () => {
  let component: Ec2VPNConnectionRouteComponent;
  let fixture: ComponentFixture<Ec2VPNConnectionRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2VPNConnectionRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2VPNConnectionRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
