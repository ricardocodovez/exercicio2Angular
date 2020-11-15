import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserService } from 'src/app/services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    UserRoutingModule
  ], 
  providers: [
    UserService
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }
