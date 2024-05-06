import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Study02Page } from './study02.page';

describe('Study02Page', () => {
  let component: Study02Page;
  let fixture: ComponentFixture<Study02Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Study02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
