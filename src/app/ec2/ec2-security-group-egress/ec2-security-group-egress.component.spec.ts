import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2SecurityGroupEgressComponent } from './ec2-security-group-egress.component';

describe('Ec2SecurityGroupEgressComponent', () => {
  let component: Ec2SecurityGroupEgressComponent;
  let fixture: ComponentFixture<Ec2SecurityGroupEgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2SecurityGroupEgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2SecurityGroupEgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
