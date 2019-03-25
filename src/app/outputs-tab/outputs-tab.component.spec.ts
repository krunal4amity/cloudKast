import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputsTabComponent } from './outputs-tab.component';

describe('OutputsTabComponent', () => {
  let component: OutputsTabComponent;
  let fixture: ComponentFixture<OutputsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
