import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonResourceComponent } from './common-resource.component';

describe('CommonResourceComponent', () => {
  let component: CommonResourceComponent;
  let fixture: ComponentFixture<CommonResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
