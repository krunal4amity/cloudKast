import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2VPCEndpointServiceComponent } from './ec2-vpcendpoint-service.component';

describe('Ec2VPCEndpointServiceComponent', () => {
  let component: Ec2VPCEndpointServiceComponent;
  let fixture: ComponentFixture<Ec2VPCEndpointServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2VPCEndpointServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2VPCEndpointServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
