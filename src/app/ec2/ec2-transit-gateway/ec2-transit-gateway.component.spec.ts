import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2TransitGatewayComponent } from './ec2-transit-gateway.component';

describe('Ec2TransitGatewayComponent', () => {
  let component: Ec2TransitGatewayComponent;
  let fixture: ComponentFixture<Ec2TransitGatewayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2TransitGatewayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2TransitGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
