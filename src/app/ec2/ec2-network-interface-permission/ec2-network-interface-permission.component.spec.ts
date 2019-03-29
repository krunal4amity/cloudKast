import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2NetworkInterfacePermissionComponent } from './ec2-network-interface-permission.component';

describe('Ec2NetworkInterfacePermissionComponent', () => {
  let component: Ec2NetworkInterfacePermissionComponent;
  let fixture: ComponentFixture<Ec2NetworkInterfacePermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2NetworkInterfacePermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2NetworkInterfacePermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
