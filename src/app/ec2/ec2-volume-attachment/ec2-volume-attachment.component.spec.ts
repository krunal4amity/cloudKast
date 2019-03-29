import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2VolumeAttachmentComponent } from './ec2-volume-attachment.component';

describe('Ec2VolumeAttachmentComponent', () => {
  let component: Ec2VolumeAttachmentComponent;
  let fixture: ComponentFixture<Ec2VolumeAttachmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2VolumeAttachmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2VolumeAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
