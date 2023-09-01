import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task3FormsComponent } from './task3-forms.component';

describe('Task3FormsComponent', () => {
  let component: Task3FormsComponent;
  let fixture: ComponentFixture<Task3FormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Task3FormsComponent]
    });
    fixture = TestBed.createComponent(Task3FormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
