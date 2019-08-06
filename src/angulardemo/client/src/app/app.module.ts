import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from "./shared/user/user.service";
import { HttpClientModule} from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import {RouterModule, Route, Routes} from "@angular/router";

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserAddComponent } from './user-add/user-add.component';

//* 路由
const appRoutes: Routes  = [
  { path: '', redirectTo: 'user-list' },
  { path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'user-edit',
    component: UserEditComponent
  },
  {
    path: 'user-add',
    component: UserAddComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserEditComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
