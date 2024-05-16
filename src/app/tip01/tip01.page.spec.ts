import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tip01Page } from './tip01.page';

describe('Tip01Page', () => {
  let component: Tip01Page;
  let fixture: ComponentFixture<Tip01Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tip01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
