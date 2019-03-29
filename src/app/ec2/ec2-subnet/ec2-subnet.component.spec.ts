import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2SubnetComponent } from './ec2-subnet.component';

describe('Ec2SubnetComponent', () => {
  let component: Ec2SubnetComponent;
  let fixture: ComponentFixture<Ec2SubnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2SubnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2SubnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
