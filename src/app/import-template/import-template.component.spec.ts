import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportTemplateComponent } from './import-template.component';

describe('ImportTemplateComponent', () => {
  let component: ImportTemplateComponent;
  let fixture: ComponentFixture<ImportTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
