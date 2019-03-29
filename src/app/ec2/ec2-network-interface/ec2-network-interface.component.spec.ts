import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2NetworkInterfaceComponent } from './ec2-network-interface.component';

describe('Ec2NetworkInterfaceComponent', () => {
  let component: Ec2NetworkInterfaceComponent;
  let fixture: ComponentFixture<Ec2NetworkInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2NetworkInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2NetworkInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
