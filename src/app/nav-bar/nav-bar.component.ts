import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { Router } from '@angular/router'
import 'rxjs/add/operator/map'
import { Subscriber } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private http: Http,
    private router: Router) {}

  onClickSubmitUser(data){
    this.http.get("http://localhost:3000/checkdata",data.email).map((res) => res.json()).subscribe((data) => this.login(data))
  }

  onClickSubmitMerchant(data){
    console.log(data);
  }

  login(data){
    this.router.navigate(['/user-login'])
  }

  showresponse(data){
    console.log(data);
  }

  ngOnInit() {
  }

}
