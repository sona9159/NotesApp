import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { noteSchema } from '../Interface/noteSchema';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NoteslistService {
  private notesSubject = new BehaviorSubject<noteSchema[]>([]);
  notes$ = this.notesSubject.asObservable();

  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    this.loadInitialData();
  }

  private loadInitialData() {
    this.getNotes().subscribe(notes => this.notesSubject.next(notes));
  }

  addNotes(note: string): Observable<noteSchema[]> {
    return this.http.post<noteSchema[]>(this.url, { notes: note }).pipe(tap(() => this.loadInitialData()));
  }

  getNotes(): Observable<noteSchema[]> {
    return this.http.get<noteSchema[]>(this.url);
  }
  deleteNotes(note: noteSchema): Observable<noteSchema> {
    return this.http.delete<noteSchema>(this.url + '/' + note._id).pipe(tap(() => this.loadInitialData()));
  }
  EditNotes(note: noteSchema): Observable<noteSchema> {
    return this.http.patch<noteSchema>(`${this.url}/${note._id}`, note).pipe(tap(() => this.loadInitialData()));
  }
  UpdateNoteStatus(note: noteSchema): Observable<noteSchema> {
    return this.http.put<noteSchema>(`${this.url}/${note._id}`, note).pipe(
      tap(() => this.loadInitialData())
    );
  }

}
