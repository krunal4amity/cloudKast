import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2VPCPeeringConnectionComponent } from './ec2-vpcpeering-connection.component';

describe('Ec2VPCPeeringConnectionComponent', () => {
  let component: Ec2VPCPeeringConnectionComponent;
  let fixture: ComponentFixture<Ec2VPCPeeringConnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2VPCPeeringConnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2VPCPeeringConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
