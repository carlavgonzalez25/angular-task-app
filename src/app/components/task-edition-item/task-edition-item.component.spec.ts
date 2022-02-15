import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEditionItemComponent } from './task-edition-item.component';

describe('TaskEditionItemComponent', () => {
  let component: TaskEditionItemComponent;
  let fixture: ComponentFixture<TaskEditionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskEditionItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskEditionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
