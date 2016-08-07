import {UserComponent} from "./user/user.component";
import {HomeComponent} from "./home.component";
import {provideRouter} from "@angular/router";

const APP_ROUTES = [
  {path: 'user/:id', component: UserComponent},
  {path: '', component: HomeComponent}
];

export const APP_ROUTES_PROVIDER = [
  provideRouter(APP_ROUTES)
];
