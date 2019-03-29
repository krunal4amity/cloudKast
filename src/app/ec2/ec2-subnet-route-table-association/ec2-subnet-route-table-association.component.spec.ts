import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2SubnetRouteTableAssociationComponent } from './ec2-subnet-route-table-association.component';

describe('Ec2SubnetRouteTableAssociationComponent', () => {
  let component: Ec2SubnetRouteTableAssociationComponent;
  let fixture: ComponentFixture<Ec2SubnetRouteTableAssociationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2SubnetRouteTableAssociationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2SubnetRouteTableAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
