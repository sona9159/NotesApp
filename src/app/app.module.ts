import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NavComponent } from './nav/nav.component';
import { GetnotelistComponent } from './getnotelist/getnotelist.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { PinNoteComponent } from './pin-note/pin-note.component';
import { SearchnoteComponent } from './searchnote/searchnote.component';


@NgModule({
  declarations: [
    AppComponent,
    AddNoteComponent,
    NavComponent,
    GetnotelistComponent,
    HomeComponent,
    EditNoteComponent,
    PinNoteComponent,
    SearchnoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
