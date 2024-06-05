import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { NoteslistService } from '../service/noteslist.service';
import { noteSchema } from '../Interface/noteSchema';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getnotelist',
  templateUrl: './getnotelist.component.html',
  styleUrls: ['./getnotelist.component.css'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class GetnotelistComponent implements OnInit {
  notelist!: noteSchema[];
  selectedId!:string;  
  pinnedStatus:boolean=false;
  constructor(private router: Router, private notelistservice: NoteslistService 
    , private changeDetection: ChangeDetectorRef, private ngZone:NgZone) { }

  ngOnInit(): void {
    this.subscribeToNote();
  }

  subscribeToNote()
  {
    this.notelistservice.notes$.subscribe((data)=>{
      this.notelist=data;
    })
  }
 dropdown(note:noteSchema)
 {
  this.selectedId=note._id;
  this.pinnedStatus = !this.pinnedStatus;
  
 }
 pinnedNote(note: noteSchema): void {
  note.pinned = !note.pinned;
  this.updateNoteStatus(note);
  this.pinnedStatus = false;
}

updateNoteStatus(note: noteSchema): void {
  this.notelistservice.UpdateNoteStatus(note).subscribe(
    (updatedNote) => {
      this.ngZone.run(()=>{
      const index = this.notelist.findIndex(note => note._id === updatedNote._id);
      if (index > -1) {
          this.notelist[index] = updatedNote;
      }
          this.changeDetection.detectChanges();  
      }   
  )},
    (error) => {
      console.error('Error updating note:', error); // Log error details
      alert(`Error updating note: ${error.message}`);
    }
  );
} 

  deleteNote(note: noteSchema): void {
    this.notelistservice.deleteNotes(note).subscribe(() => {
      this.notelist = this.notelist.filter(noteitem => noteitem !== note);
      
    });
  }

  editNote(id: string): void {
    this.router.navigate(['/editnote', id]);
  }

  trackByNoteId(index: number, note: noteSchema): string {
    return note._id;
  }
  
}
