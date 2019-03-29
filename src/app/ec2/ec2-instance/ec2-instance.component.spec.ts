import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EC2InstanceComponent } from './ec2-instance.component';

describe('EC2InstanceComponent', () => {
  let component: EC2InstanceComponent;
  let fixture: ComponentFixture<EC2InstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EC2InstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EC2InstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
