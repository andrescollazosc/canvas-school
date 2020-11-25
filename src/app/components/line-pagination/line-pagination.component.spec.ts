import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinePaginationComponent } from './line-pagination.component';

describe('LinePaginationComponent', () => {
  let component: LinePaginationComponent;
  let fixture: ComponentFixture<LinePaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinePaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
