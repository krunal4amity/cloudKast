import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2LaunchTemplateComponent } from './ec2-launch-template.component';

describe('Ec2LaunchTemplateComponent', () => {
  let component: Ec2LaunchTemplateComponent;
  let fixture: ComponentFixture<Ec2LaunchTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2LaunchTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2LaunchTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
