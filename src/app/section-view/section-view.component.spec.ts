import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionViewComponent } from './section-view.component';

describe('SectionViewComponent', () => {
  let component: SectionViewComponent;
  let fixture: ComponentFixture<SectionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
