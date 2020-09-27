import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Semana1Service } from './semana1.service';
import { HttpClientModule } from '@angular/common/http';
import { BorderDirective } from './directives/border.component';
import { AngularFireModule } from "@angular/fire";
 import { AngularFireStorageModule } from "@angular/fire/storage";
 import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BorderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    HttpClientModule,ReactiveFormsModule
  ],
  providers: [Semana1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
