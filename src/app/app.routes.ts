import {UserComponent} from "./user/user.component";
import {HomeComponent} from "./home.component";
import {provideRouter, RouterConfig} from "@angular/router";
import {USER_ROUTES} from "./user/user.routes";

const APP_ROUTES: RouterConfig = [
  {path: 'user/:id', component: UserComponent},
  {path: 'user/:id', component: UserComponent, children: USER_ROUTES},
  {path: 'user', redirectTo: 'user/1', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: 'user/1', pathMatch: 'full'}
];

export const APP_ROUTES_PROVIDER = [
  provideRouter(APP_ROUTES)
];
