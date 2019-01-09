import { Component, HostBinding, OnInit, OnDestroy } from '@angular/core';
import DmnViewer from 'dmn-js';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'dmn-viewer',
  templateUrl: './dmn-viewer.component.html'
  //styleUrls: ['./app.css',"./diagram-js.css"]
})
export class DMNViewerComponent  implements OnInit
{     
    constructor(private http : HttpClient) { }
    
  

   ngOnInit() {

    var dmnPath = 'assets/resources/example.dmn';
  
    this.http.get(dmnPath, { responseType: 'text' })
             .subscribe(response => {
                console.log(response);  
                var dmnVal = response;
  
                var dmnViewer = new DmnViewer({
                  container: '#canvas',
                  height: '100%',
                  width: '100%'
                });    
  
                dmnViewer.importXML(dmnVal, function(err) {
      
                  if (!err) {
                      console.log('success!');
                      //viewer.get('canvas').zoom('fit-viewport');

                      // access active viewer components
                      var activeViewer = dmnViewer.getActiveViewer();

                      // access active editor components
                      var canvas = activeViewer.get('canvas');

                      // zoom to fit full viewport
                      canvas.zoom('fit-viewport')

                  } else {
                      console.log('something went wrong:', err);
                  }
                  });
  
              });
             
      }
  
}
