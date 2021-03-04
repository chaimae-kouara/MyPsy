import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';



import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterUserComponent } from './register-user/register-user.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeCComponent } from './home-c/home-c.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { RegisterSimpleUserComponent } from './register-simple-user/register-simple-user.component';
import { HomeUComponent } from './home-u/home-u.component';
import { ListCoachsComponent } from './list-coachs/list-coachs.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeCUComponent } from './home-c-u/home-c-u.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    WelcomeComponent,
    HomeCComponent,
    RegisterSimpleUserComponent,
    HomeUComponent,
    ListCoachsComponent,
    HomeCUComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule, // CLI adds AppRoutingModule to the AppModule's imports array
    RouterModule.forRoot([
      {path:'', component:WelcomeComponent},
      {path:'coach', component:RegisterUserComponent},
      {path:'user', component:RegisterSimpleUserComponent}
    ]),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
