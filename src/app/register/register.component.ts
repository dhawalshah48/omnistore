import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private http: Http) { }
  ngOnInit() {
    this.http.get("http://jsonplaceholder.typicode.com/users").map((res) => res.json()).subscribe((data) => console.log(data))
  }

}
