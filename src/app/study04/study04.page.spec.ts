import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Study04Page } from './study04.page';

describe('Study04Page', () => {
  let component: Study04Page;
  let fixture: ComponentFixture<Study04Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Study04Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
