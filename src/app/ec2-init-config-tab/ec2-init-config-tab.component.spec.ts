import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2InitConfigTabComponent } from './ec2-init-config-tab.component';

describe('Ec2InitConfigTabComponent', () => {
  let component: Ec2InitConfigTabComponent;
  let fixture: ComponentFixture<Ec2InitConfigTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2InitConfigTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2InitConfigTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
