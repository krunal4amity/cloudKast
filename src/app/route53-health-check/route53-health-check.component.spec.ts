import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Route53HealthCheckComponent } from './route53-health-check.component';

describe('Route53HealthCheckComponent', () => {
  let component: Route53HealthCheckComponent;
  let fixture: ComponentFixture<Route53HealthCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route53HealthCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route53HealthCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
