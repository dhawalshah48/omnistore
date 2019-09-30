import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'
import { Subscriber } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  d={"r":null}
  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get("http://jsonplaceholder.typicode.com/users").map((res) => res.json()).subscribe((data) => console.log(data))
  }

  onClickSubmit(data){
    this.http.post("http://localhost:3000/insertdata",data).map((res) => res.json()).subscribe((data) => this.showresponse(data))
  }

  showresponse(data){
    console.log(data)
    this.d=data
  }

}
