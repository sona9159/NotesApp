import { Component, OnInit } from '@angular/core';
import { NoteslistService } from '../service/noteslist.service';
import { noteSchema } from '../Interface/noteSchema';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  addNote: string = '';
  notesList: noteSchema[] = []; // Array to store the list of notes

  constructor(private router:Router,private NoteListService: NoteslistService) {}

  ngOnInit(): void {
     // Fetch the initial list of notes
  }

  addNotes() {
    this.NoteListService.addNotes(this.addNote.trim()).subscribe((data)=>{
      this.notesList=data;
      this.addNote='';
      this.router.navigateByUrl('/');
    })
  }

  
}
