import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsTabComponent } from './conditions-tab.component';

describe('ConditionsTabComponent', () => {
  let component: ConditionsTabComponent;
  let fixture: ComponentFixture<ConditionsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
