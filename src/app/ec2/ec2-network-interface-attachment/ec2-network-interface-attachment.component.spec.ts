import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2NetworkInterfaceAttachmentComponent } from './ec2-network-interface-attachment.component';

describe('Ec2NetworkInterfaceAttachmentComponent', () => {
  let component: Ec2NetworkInterfaceAttachmentComponent;
  let fixture: ComponentFixture<Ec2NetworkInterfaceAttachmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2NetworkInterfaceAttachmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2NetworkInterfaceAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
