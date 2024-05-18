import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchModalPage } from './search-modal.page';

describe('SearchModalPage', () => {
  let component: SearchModalPage;
  let fixture: ComponentFixture<SearchModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SearchModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
