import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2TransitGatewayRouteComponent } from './ec2-transit-gateway-route.component';

describe('Ec2TransitGatewayRouteComponent', () => {
  let component: Ec2TransitGatewayRouteComponent;
  let fixture: ComponentFixture<Ec2TransitGatewayRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2TransitGatewayRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2TransitGatewayRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
