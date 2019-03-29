import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2VPCComponent } from './ec2-vpc.component';

describe('Ec2VPCComponent', () => {
  let component: Ec2VPCComponent;
  let fixture: ComponentFixture<Ec2VPCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2VPCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2VPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
