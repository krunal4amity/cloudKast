import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EC2InitComponent } from './ec2-init.component';

describe('EC2InitComponent', () => {
  let component: EC2InitComponent;
  let fixture: ComponentFixture<EC2InitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EC2InitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EC2InitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
