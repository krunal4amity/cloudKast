import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2NetworkAclComponent } from './ec2-network-acl.component';

describe('Ec2NetworkAclComponent', () => {
  let component: Ec2NetworkAclComponent;
  let fixture: ComponentFixture<Ec2NetworkAclComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2NetworkAclComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2NetworkAclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
