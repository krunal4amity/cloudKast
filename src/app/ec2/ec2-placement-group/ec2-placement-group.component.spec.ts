import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2PlacementGroupComponent } from './ec2-placement-group.component';

describe('Ec2PlacementGroupComponent', () => {
  let component: Ec2PlacementGroupComponent;
  let fixture: ComponentFixture<Ec2PlacementGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2PlacementGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2PlacementGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
