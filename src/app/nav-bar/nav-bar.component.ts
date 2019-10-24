import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'
import { Subscriber } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private http: Http) { }

  onClickSubmitUser(data){
    console.log(data);
  }



  ngOnInit() {
  }

}
