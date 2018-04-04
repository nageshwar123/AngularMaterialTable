import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule} from '@angular/material';


import { AppComponent } from './app.component';
import { NageshComponent } from './nagesh/nagesh.component';


@NgModule({
  declarations: [
    AppComponent,
    NageshComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
