import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { MainModule } from './main/main.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatService } from './shared/services/chat.service';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    MainModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()  

  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



