import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2VpnConnectionComponent } from './ec2-vpn-connection.component';

describe('Ec2VpnConnectionComponent', () => {
  let component: Ec2VpnConnectionComponent;
  let fixture: ComponentFixture<Ec2VpnConnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2VpnConnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2VpnConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
