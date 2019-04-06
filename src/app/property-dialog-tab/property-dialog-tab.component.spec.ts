import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDialogTabComponent } from './property-dialog-tab.component';

describe('PropertyDialogTabComponent', () => {
  let component: PropertyDialogTabComponent;
  let fixture: ComponentFixture<PropertyDialogTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyDialogTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyDialogTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
