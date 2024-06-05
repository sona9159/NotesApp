import { Component, OnInit } from '@angular/core';
import { noteSchema } from '../Interface/noteSchema';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteslistService } from '../service/noteslist.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css'],
})
export class EditNoteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private notelistservice: NoteslistService, private router: Router) 
  {

  }
  note!: noteSchema;
  notelist: noteSchema[] = [];
  id!: string;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    if (this.id) {
      this.getAllNote();
    }
    else {
      console.error("No id found");
    }
  }
  editNote() {
    if (this.note && this.note._id) {
      this.notelistservice.EditNotes(this.note).subscribe(
        (note) => {
          this.note = note;
          this.router.navigateByUrl('/');     
        },
        (error) => {
          console.error('Error updating note:', error);
        }
      );
    }
    else {
      console.error('Note is not properly initialized.');
    }
  }

  getAllNote(): void {
    this.notelistservice.getNotes().subscribe(
      (data) => {
        this.notelist = data;
        this.note = this.notelist.find(note => note._id === this.id)!;
        console.log(this.note);
        if (!this.note) {
          console.error(`Note with id ${this.id} not found`);
        }
      },
      (error) => {
        console.error('Error fetching notes:', error);
      }
    );
  }
}



