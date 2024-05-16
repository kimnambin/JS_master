import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tip03Page } from './tip03.page';

describe('Tip03Page', () => {
  let component: Tip03Page;
  let fixture: ComponentFixture<Tip03Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tip03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
