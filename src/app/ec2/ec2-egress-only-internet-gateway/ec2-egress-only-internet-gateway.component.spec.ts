import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2EgressOnlyInternetGatewayComponent } from './ec2-egress-only-internet-gateway.component';

describe('Ec2EgressOnlyInternetGatewayComponent', () => {
  let component: Ec2EgressOnlyInternetGatewayComponent;
  let fixture: ComponentFixture<Ec2EgressOnlyInternetGatewayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2EgressOnlyInternetGatewayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2EgressOnlyInternetGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
