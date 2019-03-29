import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2SubnetCidrBlockComponent } from './ec2-subnet-cidr-block.component';

describe('Ec2SubnetCidrBlockComponent', () => {
  let component: Ec2SubnetCidrBlockComponent;
  let fixture: ComponentFixture<Ec2SubnetCidrBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2SubnetCidrBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2SubnetCidrBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
