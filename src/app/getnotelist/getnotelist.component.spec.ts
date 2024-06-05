import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetnotelistComponent } from './getnotelist.component';

describe('GetnotelistComponent', () => {
  let component: GetnotelistComponent;
  let fixture: ComponentFixture<GetnotelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetnotelistComponent]
    });
    fixture = TestBed.createComponent(GetnotelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
