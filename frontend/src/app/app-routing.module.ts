import { ListCoachsComponent } from './list-coachs/list-coachs.component';
import { HomeCComponent } from './home-c/home-c.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeUComponent } from './home-u/home-u.component';
import { HomeCUComponent } from './home-c-u/home-c-u.component';

const routes: Routes = [
  {path:'homec/:id', component:HomeCComponent},
  {path:'homec', component:HomeCComponent},
  {path:'homeu', component:HomeUComponent},
  {path:'homeu/:id', component:HomeUComponent},
  {path:'listCoachs', component:ListCoachsComponent},
  {path:'coachU/:id', component : HomeCUComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
