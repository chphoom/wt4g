import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  stories = [
    {
      name: "Register",
      route: "/register"
    },
    {
      name: "Stats",
      route: "/stats"
    },
    {
      name: "Check-in",
      route: "/checkin"
    }
  ]
}