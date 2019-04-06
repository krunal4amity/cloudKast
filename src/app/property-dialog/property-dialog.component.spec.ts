import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDialogComponent } from './property-dialog.component';

describe('PropertyDialogComponent', () => {
  let component: PropertyDialogComponent;
  let fixture: ComponentFixture<PropertyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
