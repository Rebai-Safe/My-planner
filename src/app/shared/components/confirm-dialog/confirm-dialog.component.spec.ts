<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialogComponent } from './confirm-dialog.component';
=======
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ConfirmDialogComponent} from './confirm-dialog.component';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DatePipe} from "@angular/common";
>>>>>>> 1827211056fe2640aede6378643f4469a89bced7

describe('ConfirmDialogComponent', () => {
  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;
<<<<<<< HEAD

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmDialogComponent]
=======
  let mockDialog: jasmine.SpyObj<MatDialogRef<ConfirmDialogComponent>>

  beforeEach(async () => {
    // Create a spy for MatDialogRef
    mockDialog = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      declarations: [ConfirmDialogComponent],
      providers: [
        {provide: MatDialogRef, useValue: mockDialog},
        {provide: MAT_DIALOG_DATA, useValue: {}}
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmDialogComponent],
      providers: [DatePipe]
>>>>>>> 1827211056fe2640aede6378643f4469a89bced7
    });
    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
