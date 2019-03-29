import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2NetworkAclEntryComponent } from './ec2-network-acl-entry.component';

describe('Ec2NetworkAclEntryComponent', () => {
  let component: Ec2NetworkAclEntryComponent;
  let fixture: ComponentFixture<Ec2NetworkAclEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2NetworkAclEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2NetworkAclEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
