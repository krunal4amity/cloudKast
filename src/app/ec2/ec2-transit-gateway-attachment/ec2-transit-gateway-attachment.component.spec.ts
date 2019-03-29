import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2TransitGatewayAttachmentComponent } from './ec2-transit-gateway-attachment.component';

describe('Ec2TransitGatewayAttachmentComponent', () => {
  let component: Ec2TransitGatewayAttachmentComponent;
  let fixture: ComponentFixture<Ec2TransitGatewayAttachmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2TransitGatewayAttachmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2TransitGatewayAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
