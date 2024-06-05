import { Component ,  OnInit } from '@angular/core';
import { NoteslistService } from '../service/noteslist.service';
import { noteSchema } from '../Interface/noteSchema';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-searchnote',
  templateUrl: './searchnote.component.html',
  styleUrls: ['./searchnote.component.css']
})
export class SearchnoteComponent implements OnInit{
  notelist: noteSchema[] = [];
  note!:noteSchema;
  SearchResult:noteSchema[]=[];
  SearchTerm:string='';
  constructor( private notelistservice: NoteslistService,private router: Router) 
  {

  }
  ngOnInit(): void {
    this.getAllNote();
    }
    getAllNote(): void {
      this.notelistservice.getNotes().subscribe(
        (data:noteSchema[]) => {
          this.notelist = data;
        }
      );
    }
    searchNote():void
    {
      if(this.SearchTerm==="")
        {
          this.SearchResult=[];
        }
        else
        {
          this.SearchResult= this.notelist.filter(note=>note.notes.includes(this.SearchTerm));     
        }
     
    }
    editNote(id: string): void {
      this.router.navigate(['/editnote', id]);
    }
  
}
