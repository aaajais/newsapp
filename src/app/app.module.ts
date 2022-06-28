import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadlineComponent } from './headline/headline.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsappService } from './service/newsapp.service';


@NgModule({
  declarations: [
    AppComponent,
    HeadlineComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsappService],
  bootstrap: [AppComponent],

})
export class AppModule { }
