import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedjsonComponent } from './nestedjson.component';

describe('NestedjsonComponent', () => {
  let component: NestedjsonComponent;
  let fixture: ComponentFixture<NestedjsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedjsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedjsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
