import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Study01Page } from './study01.page';

describe('Study01Page', () => {
  let component: Study01Page;
  let fixture: ComponentFixture<Study01Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Study01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
