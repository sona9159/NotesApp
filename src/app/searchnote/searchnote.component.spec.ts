import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchnoteComponent } from './searchnote.component';

describe('SearchnoteComponent', () => {
  let component: SearchnoteComponent;
  let fixture: ComponentFixture<SearchnoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchnoteComponent]
    });
    fixture = TestBed.createComponent(SearchnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
