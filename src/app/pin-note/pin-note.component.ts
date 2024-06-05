import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NoteslistService } from '../service/noteslist.service';
import { noteSchema } from '../Interface/noteSchema';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pin-note',
  templateUrl: './pin-note.component.html',
  styleUrls: ['./pin-note.component.css']
})
export class PinNoteComponent implements OnInit {

  notes: noteSchema[] = [];
  pinnedNotes: noteSchema[] = [];
  constructor(private notelistservice: NoteslistService , private changeDitector:ChangeDetectorRef,
      private router:Router
  ) {
  }
  ngOnInit(): void {
    this.subscribeToNotes();
  }

  subscribeToNotes(): void {
    this.notelistservice.notes$.subscribe((data) => {
      this.notes = data;
      this.PinnedNotes();
    });
  }
  PinnedNotes():void
  {
    this.pinnedNotes= this.notes.filter((data)=>data.pinned);
    this.changeDitector.detectChanges();
  }
  deleteNote(note:noteSchema)
  {
    this.notelistservice.deleteNotes(note).subscribe(()=>{
      this.notes = this.notes.filter(noteitem => noteitem !== note);
    })
  } 
  editNote(id: string)
  {
    this.router.navigate(['/editnote', id]);
  } 
}
