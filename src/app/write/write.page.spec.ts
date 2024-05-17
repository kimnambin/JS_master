import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WritePage } from './write.page';

describe('WritePage', () => {
  let component: WritePage;
  let fixture: ComponentFixture<WritePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WritePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
