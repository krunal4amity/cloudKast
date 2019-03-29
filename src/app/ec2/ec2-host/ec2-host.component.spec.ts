import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2HostComponent } from './ec2-host.component';

describe('Ec2HostComponent', () => {
  let component: Ec2HostComponent;
  let fixture: ComponentFixture<Ec2HostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2HostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
