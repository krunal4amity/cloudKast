import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2InternetGatewayComponent } from './ec2-internet-gateway.component';

describe('Ec2InternetGatewayComponent', () => {
  let component: Ec2InternetGatewayComponent;
  let fixture: ComponentFixture<Ec2InternetGatewayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2InternetGatewayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2InternetGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
