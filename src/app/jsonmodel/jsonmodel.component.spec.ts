import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonmodelComponent } from './jsonmodel.component';

describe('JsonmodelComponent', () => {
  let component: JsonmodelComponent;
  let fixture: ComponentFixture<JsonmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
