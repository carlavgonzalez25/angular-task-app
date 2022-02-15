import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDisplayItemComponent } from './task-display-item.component';

describe('TaskDisplayItemComponent', () => {
  let component: TaskDisplayItemComponent;
  let fixture: ComponentFixture<TaskDisplayItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskDisplayItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDisplayItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
