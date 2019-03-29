import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2RouteTableComponent } from './ec2-route-table.component';

describe('Ec2RouteTableComponent', () => {
  let component: Ec2RouteTableComponent;
  let fixture: ComponentFixture<Ec2RouteTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2RouteTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2RouteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
