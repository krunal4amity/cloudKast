import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2VPCEndpointComponent } from './ec2-vpcendpoint.component';

describe('Ec2VPCEndpointComponent', () => {
  let component: Ec2VPCEndpointComponent;
  let fixture: ComponentFixture<Ec2VPCEndpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2VPCEndpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2VPCEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
