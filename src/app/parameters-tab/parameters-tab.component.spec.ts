import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametersTabComponent } from './parameters-tab.component';

describe('ParametersTabComponent', () => {
  let component: ParametersTabComponent;
  let fixture: ComponentFixture<ParametersTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametersTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametersTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
