/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EuComponent } from './eu.component';

describe('EuComponent', () => {
  let component: EuComponent;
  let fixture: ComponentFixture<EuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
