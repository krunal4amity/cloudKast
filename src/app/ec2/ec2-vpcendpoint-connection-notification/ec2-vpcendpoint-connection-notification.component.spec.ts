import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2VPCEndpointConnectionNotificationComponent } from './ec2-vpcendpoint-connection-notification.component';

describe('Ec2VPCEndpointConnectionNotificationComponent', () => {
  let component: Ec2VPCEndpointConnectionNotificationComponent;
  let fixture: ComponentFixture<Ec2VPCEndpointConnectionNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2VPCEndpointConnectionNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2VPCEndpointConnectionNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
