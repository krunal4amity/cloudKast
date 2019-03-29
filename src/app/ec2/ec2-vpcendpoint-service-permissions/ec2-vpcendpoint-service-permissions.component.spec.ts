import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2VPCEndpointServicePermissionsComponent } from './ec2-vpcendpoint-service-permissions.component';

describe('Ec2VPCEndpointServicePermissionsComponent', () => {
  let component: Ec2VPCEndpointServicePermissionsComponent;
  let fixture: ComponentFixture<Ec2VPCEndpointServicePermissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2VPCEndpointServicePermissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2VPCEndpointServicePermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
