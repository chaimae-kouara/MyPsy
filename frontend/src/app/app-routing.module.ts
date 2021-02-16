import { ListCoachsComponent } from './list-coachs/list-coachs.component';
import { ProfileCComponent } from './profile-c/profile-c.component';
import { HomeCComponent } from './home-c/home-c.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeUComponent } from './home-u/home-u.component';

const routes: Routes = [
  {path:'homec', component:HomeCComponent},
  {path:'homeu', component:HomeUComponent},
  {path:'profilec', component:ProfileCComponent},
  {path:'listCoachs', component:ListCoachsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
