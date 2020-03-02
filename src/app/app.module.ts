import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HlistComponent } from './hlist/hlist.component';
import {HfethService} from "./hfeth.service"
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    HlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient, HfethService],
  bootstrap: [AppComponent]
})
export class AppModule { }
