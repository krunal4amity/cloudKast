import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrinsicFunctionsComponent } from './intrinsic-functions.component';

describe('IntrinsicFunctionsComponent', () => {
  let component: IntrinsicFunctionsComponent;
  let fixture: ComponentFixture<IntrinsicFunctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrinsicFunctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrinsicFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
