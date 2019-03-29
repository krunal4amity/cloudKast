import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbsVolumeComponent } from './ebs-volume.component';

describe('EbsVolumeComponent', () => {
  let component: EbsVolumeComponent;
  let fixture: ComponentFixture<EbsVolumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbsVolumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbsVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
