import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2EIPAssociationComponent } from './ec2-eipassociation.component';

describe('Ec2EIPAssociationComponent', () => {
  let component: Ec2EIPAssociationComponent;
  let fixture: ComponentFixture<Ec2EIPAssociationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2EIPAssociationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2EIPAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
