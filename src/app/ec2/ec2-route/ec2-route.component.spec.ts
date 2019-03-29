import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2RouteComponent } from './ec2-route.component';

describe('Ec2RouteComponent', () => {
  let component: Ec2RouteComponent;
  let fixture: ComponentFixture<Ec2RouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2RouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2RouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
