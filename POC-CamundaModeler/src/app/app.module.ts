import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BPMNViewerComponent } from './bpmn-viewer/bpmn-viewer.component';
import { DMNViewerComponent } from './dmn-viewer/dmn-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    BPMNViewerComponent,
    HomeComponent,
    DMNViewerComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
