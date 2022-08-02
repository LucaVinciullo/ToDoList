import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListContainer.Component.TsComponent } from './to-do-list-container.component.ts.component';

describe('ToDoListContainer.Component.TsComponent', () => {
  let component: ToDoListContainer.Component.TsComponent;
  let fixture: ComponentFixture<ToDoListContainer.Component.TsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoListContainer.Component.TsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoListContainer.Component.TsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
