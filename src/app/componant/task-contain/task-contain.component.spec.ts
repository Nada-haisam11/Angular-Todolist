import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskContainComponent } from './task-contain.component';

describe('TaskContainComponent', () => {
  let component: TaskContainComponent;
  let fixture: ComponentFixture<TaskContainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskContainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskContainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
