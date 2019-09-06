import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlfrontComponent } from './sqlfront.component';

describe('SqlfrontComponent', () => {
  let component: SqlfrontComponent;
  let fixture: ComponentFixture<SqlfrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlfrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
