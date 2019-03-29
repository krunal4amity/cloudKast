import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2FlowLogComponent } from './ec2-flow-log.component';

describe('Ec2FlowLogComponent', () => {
  let component: Ec2FlowLogComponent;
  let fixture: ComponentFixture<Ec2FlowLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2FlowLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2FlowLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
