import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2VPNGatewayRoutePropagationComponent } from './ec2-vpngateway-route-propagation.component';

describe('Ec2VPNGatewayRoutePropagationComponent', () => {
  let component: Ec2VPNGatewayRoutePropagationComponent;
  let fixture: ComponentFixture<Ec2VPNGatewayRoutePropagationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2VPNGatewayRoutePropagationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2VPNGatewayRoutePropagationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
