import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2NatGatewayComponent } from './ec2-nat-gateway.component';

describe('Ec2NatGatewayComponent', () => {
  let component: Ec2NatGatewayComponent;
  let fixture: ComponentFixture<Ec2NatGatewayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2NatGatewayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2NatGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
