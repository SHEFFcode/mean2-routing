import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES, Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {OnDestroy} from "@angular/core/esm";

@Component({
  moduleId: module.id,
  selector: 'app-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class UserComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  id: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );
  }

  ngOnInit() {
  }

  onNavigate() {
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
