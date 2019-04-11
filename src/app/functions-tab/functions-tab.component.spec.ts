import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionsTabComponent } from './functions-tab.component';

describe('FunctionsTabComponent', () => {
  let component: FunctionsTabComponent;
  let fixture: ComponentFixture<FunctionsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
