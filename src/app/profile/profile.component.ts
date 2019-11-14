import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  title = 'my location';
  lat = 22.720154;
  lng = 75.901287;

  constructor() { }

  ngOnInit() {
  }

}
