import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2TransitGatewayRouteTableAssociationComponent } from './ec2-transit-gateway-route-table-association.component';

describe('Ec2TransitGatewayRouteTableAssociationComponent', () => {
  let component: Ec2TransitGatewayRouteTableAssociationComponent;
  let fixture: ComponentFixture<Ec2TransitGatewayRouteTableAssociationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2TransitGatewayRouteTableAssociationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2TransitGatewayRouteTableAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
