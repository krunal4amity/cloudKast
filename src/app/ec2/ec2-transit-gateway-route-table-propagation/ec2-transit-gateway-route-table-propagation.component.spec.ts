import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2TransitGatewayRouteTablePropagationComponent } from './ec2-transit-gateway-route-table-propagation.component';

describe('Ec2TransitGatewayRouteTablePropagationComponent', () => {
  let component: Ec2TransitGatewayRouteTablePropagationComponent;
  let fixture: ComponentFixture<Ec2TransitGatewayRouteTablePropagationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2TransitGatewayRouteTablePropagationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2TransitGatewayRouteTablePropagationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
