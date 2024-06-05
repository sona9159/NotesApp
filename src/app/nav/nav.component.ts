import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  showCalendar:boolean=false
constructor()
{

}
toggleCalendar()
{
  this.showCalendar=true;
}
}
