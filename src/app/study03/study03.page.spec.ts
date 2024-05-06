import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Study03Page } from './study03.page';

describe('Study03Page', () => {
  let component: Study03Page;
  let fixture: ComponentFixture<Study03Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Study03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
