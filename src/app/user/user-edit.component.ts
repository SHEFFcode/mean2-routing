import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ComponentCanDeactivate} from "./user-edit.guard";
import {Observable} from "rxjs";

@Component({
  moduleId: module.id,
  selector: 'app-user-edit',
  templateUrl: 'user-edit.component.html',
  styleUrls: ['user-edit.component.css']
})
export class UserEditComponent implements OnInit, ComponentCanDeactivate {
  done: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNavigate() {
    this.router.navigate(['/']);
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.done) {
      return confirm('Do you want to leave?');
    } else {
      return true;
    }
  }

}
