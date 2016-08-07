import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
