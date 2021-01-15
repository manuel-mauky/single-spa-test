import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {EmptyRouteComponent} from './empty-route/empty-route.component';
import {SomethingComponent} from './something/something.component';
import {OtherComponent} from './other/other.component';


const routes: Routes = [
  { path: "angular/something", component: SomethingComponent },
  { path: "angular/other", component: OtherComponent },
  { path: "**", component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/"}]
})
export class AppRoutingModule { }
