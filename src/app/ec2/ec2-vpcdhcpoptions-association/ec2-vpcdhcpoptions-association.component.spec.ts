import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2VPCDHCPOptionsAssociationComponent } from './ec2-vpcdhcpoptions-association.component';

describe('Ec2VPCDHCPOptionsAssociationComponent', () => {
  let component: Ec2VPCDHCPOptionsAssociationComponent;
  let fixture: ComponentFixture<Ec2VPCDHCPOptionsAssociationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2VPCDHCPOptionsAssociationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2VPCDHCPOptionsAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
