import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tip02Page } from './tip02.page';

describe('Tip02Page', () => {
  let component: Tip02Page;
  let fixture: ComponentFixture<Tip02Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tip02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
