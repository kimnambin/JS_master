import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FreePage } from './free.page';

describe('FreePage', () => {
  let component: FreePage;
  let fixture: ComponentFixture<FreePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
