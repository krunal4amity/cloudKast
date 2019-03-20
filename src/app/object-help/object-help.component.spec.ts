import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectHelpComponent } from './object-help.component';

describe('ObjectHelpComponent', () => {
  let component: ObjectHelpComponent;
  let fixture: ComponentFixture<ObjectHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
