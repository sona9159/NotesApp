import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinNoteComponent } from './pin-note.component';

describe('PinNoteComponent', () => {
  let component: PinNoteComponent;
  let fixture: ComponentFixture<PinNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PinNoteComponent]
    });
    fixture = TestBed.createComponent(PinNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
