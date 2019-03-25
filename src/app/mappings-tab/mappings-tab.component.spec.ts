import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingsTabComponent } from './mappings-tab.component';

describe('MappingsTabComponent', () => {
  let component: MappingsTabComponent;
  let fixture: ComponentFixture<MappingsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MappingsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MappingsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
