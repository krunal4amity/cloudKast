import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2SecurityGroupIngressComponent } from './ec2-security-group-ingress.component';

describe('Ec2SecurityGroupIngressComponent', () => {
  let component: Ec2SecurityGroupIngressComponent;
  let fixture: ComponentFixture<Ec2SecurityGroupIngressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2SecurityGroupIngressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2SecurityGroupIngressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
