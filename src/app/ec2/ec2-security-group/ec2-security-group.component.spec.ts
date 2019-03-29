import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EC2SecurityGroupComponent } from './ec2-security-group.component';

describe('EC2SecurityGroupComponent', () => {
  let component: EC2SecurityGroupComponent;
  let fixture: ComponentFixture<EC2SecurityGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EC2SecurityGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EC2SecurityGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
