import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2initconfigComponent } from './ec2initconfig.component';

describe('Ec2initconfigComponent', () => {
  let component: Ec2initconfigComponent;
  let fixture: ComponentFixture<Ec2initconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2initconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2initconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
