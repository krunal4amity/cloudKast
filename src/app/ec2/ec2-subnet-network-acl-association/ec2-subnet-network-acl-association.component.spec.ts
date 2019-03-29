import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2SubnetNetworkAclAssociationComponent } from './ec2-subnet-network-acl-association.component';

describe('Ec2SubnetNetworkAclAssociationComponent', () => {
  let component: Ec2SubnetNetworkAclAssociationComponent;
  let fixture: ComponentFixture<Ec2SubnetNetworkAclAssociationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2SubnetNetworkAclAssociationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2SubnetNetworkAclAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
