import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EC2EIPComponent } from './ec2-eip.component';

describe('EC2EIPComponent', () => {
  let component: EC2EIPComponent;
  let fixture: ComponentFixture<EC2EIPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EC2EIPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EC2EIPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
