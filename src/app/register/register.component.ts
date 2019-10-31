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
  flag = 1
  data1 = {}
  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get("http://jsonplaceholder.typicode.com/users").map((res) => res.json()).subscribe((data) => console.log(data))
  }

  onClickSubmit(data){
    console.log(data)
    if(this.flag == 0){
      data["type"]=this.flag
      this.http.post("http://localhost:3000/insertdata",data).map((res) => res.json()).subscribe((data) => this.showresponse(data))
    }
    else{
      this.data1['name'] = data['name']
      this.data1['uname'] = data['uname']
      this.data1['email'] = data['email']
      this.data1['mob'] = data['mob']
      this.data1['pass'] = data['pass']
      this.data1['type'] = this.flag
      this.http.post("http://localhost:3000/insertdata",this.data1).map((res) => res.json()).subscribe((data) => this.showresponse(data))
    }
  }

  showresponse(data){
    console.log(data)
    this.d=data
  }
}
