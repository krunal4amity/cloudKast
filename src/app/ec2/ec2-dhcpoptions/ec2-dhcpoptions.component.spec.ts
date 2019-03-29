import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2DHCPOptionsComponent } from './ec2-dhcpoptions.component';

describe('Ec2DHCPOptionsComponent', () => {
  let component: Ec2DHCPOptionsComponent;
  let fixture: ComponentFixture<Ec2DHCPOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2DHCPOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2DHCPOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
