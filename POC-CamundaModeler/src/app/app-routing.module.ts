import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BPMNViewerComponent } from './bpmn-viewer/bpmn-viewer.component';
import { DMNViewerComponent } from './dmn-viewer/dmn-viewer.component';

const routes = [ 
  {path     : 'apps/home',   component: HomeComponent},
  {path     : 'apps/bpmn-viewer',   component: BPMNViewerComponent},
  {path     : 'apps/dmn-viewer',   component: DMNViewerComponent},
  {path     : '**',        redirectTo: 'apps/bpmn-viewer'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
