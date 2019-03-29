import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2TransitGatewayRouteTableComponent } from './ec2-transit-gateway-route-table.component';

describe('Ec2TransitGatewayRouteTableComponent', () => {
  let component: Ec2TransitGatewayRouteTableComponent;
  let fixture: ComponentFixture<Ec2TransitGatewayRouteTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2TransitGatewayRouteTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2TransitGatewayRouteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
