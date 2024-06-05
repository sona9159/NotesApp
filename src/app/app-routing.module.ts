import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoteComponent } from './add-note/add-note.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { SearchnoteComponent } from './searchnote/searchnote.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'editnote/:id',component:EditNoteComponent},
  {path:'addnote',component:AddNoteComponent},
  {path:'searchnote',component: SearchnoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
