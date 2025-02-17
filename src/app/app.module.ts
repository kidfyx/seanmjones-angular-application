import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Import this for Angular Material animations
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    AppComponent
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule { }
