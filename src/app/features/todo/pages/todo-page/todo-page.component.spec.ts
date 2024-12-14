<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoPageComponent } from './todo-page.component';

=======
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoPageComponent} from './todo-page.component';
import {CommonModule, DatePipe} from "@angular/common";
import {SharedModule} from "../../../../shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = []
>>>>>>> 1827211056fe2640aede6378643f4469a89bced7
describe('TodoPageComponent', () => {
  let component: TodoPageComponent;
  let fixture: ComponentFixture<TodoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
      imports: [TodoPageComponent]
=======
      imports: [SharedModule, CommonModule, BrowserAnimationsModule, RouterModule.forRoot(routes)],
      providers: [DatePipe],
      declarations: [
        TodoPageComponent,
      ]
>>>>>>> 1827211056fe2640aede6378643f4469a89bced7
    });
    fixture = TestBed.createComponent(TodoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
