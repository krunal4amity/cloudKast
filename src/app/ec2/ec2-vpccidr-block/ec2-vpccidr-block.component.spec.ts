import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2VPCCidrBlockComponent } from './ec2-vpccidr-block.component';

describe('Ec2VPCCidrBlockComponent', () => {
  let component: Ec2VPCCidrBlockComponent;
  let fixture: ComponentFixture<Ec2VPCCidrBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2VPCCidrBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2VPCCidrBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
