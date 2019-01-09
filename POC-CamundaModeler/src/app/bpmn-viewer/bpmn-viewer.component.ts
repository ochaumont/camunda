import { Component, HostBinding, OnInit, OnDestroy } from '@angular/core';
import BpmnModeler from 'bpmn-js/lib/Modeler.js';
import DmnViewer from 'dmn-js';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//import * as propertiesPanelModule from 'bpmn-js-properties-panel';
//import * as propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda';

//import * as camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda.json';
//declare var require: any
//var camundaModdleDescriptor = require('camunda-bpmn-moddle/resources/camunda.json');

@Component({
  selector: 'bpmn-viewer',
  templateUrl: './bpmn-viewer.component.html',
  styleUrls: ['./bpmn-viewer.component.scss']
})
export class BPMNViewerComponent  implements OnInit
{     
    constructor(private http : HttpClient) { }
    
  
ngOnInit() {
  
  var bpmPath = 'assets/resources/example.bpmn';

  this.http.get(bpmPath, { responseType: 'text' })
           .subscribe(response => {
            
              var bpmnVal = response;
/*
              var modeler = new BpmnModeler({
                container: '#canvas'
              });    

              modeler.importXML(bpmnVal, function(err) {
    
                if (!err) {
                    console.log('success!');
                    //viewer.get('canvas').zoom('fit-viewport');
                } else {
                    console.log('something went wrong:', err);
                }
                });
*/
            });
           
    }
  
  /*
   ngOnInit() {

    var bpmPath = 'assets/resources/example.dmn';
  
    this.http.get(bpmPath, { responseType: 'text' })
             .subscribe(response => {
                console.log(response);  
                var bpmnVal = response;
  
                var modeler = new DmnViewer({
                  container: '#canvas'
                });    
  
                modeler.importXML(bpmnVal, function(err) {
      
                  if (!err) {
                      console.log('success!');
                      //viewer.get('canvas').zoom('fit-viewport');
                  } else {
                      console.log('something went wrong:', err);
                  }
                  });
  
              });
             
      }
  */
}
