import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2VPNGatewayComponent } from './ec2-vpngateway.component';

describe('Ec2VPNGatewayComponent', () => {
  let component: Ec2VPNGatewayComponent;
  let fixture: ComponentFixture<Ec2VPNGatewayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2VPNGatewayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2VPNGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
