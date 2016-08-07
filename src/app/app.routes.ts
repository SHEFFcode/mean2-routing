import {UserComponent} from "./user/user.component";
import {HomeComponent} from "./home.component";
import {provideRouter} from "@angular/router";
import {USER_ROUTES} from "./user/user.routes";

const APP_ROUTES = [
  {path: 'user/:id', component: UserComponent},
  {path: 'user/:id', component: UserComponent, children: USER_ROUTES},
  {path: '', component: HomeComponent}
];

export const APP_ROUTES_PROVIDER = [
  provideRouter(APP_ROUTES)
];
