import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2VPCGatewayAttachmentComponent } from './ec2-vpcgateway-attachment.component';

describe('Ec2VPCGatewayAttachmentComponent', () => {
  let component: Ec2VPCGatewayAttachmentComponent;
  let fixture: ComponentFixture<Ec2VPCGatewayAttachmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2VPCGatewayAttachmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2VPCGatewayAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
