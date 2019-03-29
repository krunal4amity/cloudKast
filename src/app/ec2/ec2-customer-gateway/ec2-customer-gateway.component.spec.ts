import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2CustomerGatewayComponent } from './ec2-customer-gateway.component';

describe('Ec2CustomerGatewayComponent', () => {
  let component: Ec2CustomerGatewayComponent;
  let fixture: ComponentFixture<Ec2CustomerGatewayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2CustomerGatewayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2CustomerGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
