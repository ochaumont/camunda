# camunda
POC on camunda workflow engine which details an issue on production compilation with code optimization.

To reproduce the issue, follow the following steps:

Step 1 : Clone the repository.

Step 2: Download the libraries with the following command (Yarn already installed):
> yarn install

Step 3: Build the project with 'production-optimized' configuration with the following command:
> ng build --configuration=production-optimized

Step 4 : Install an HTTP server and deploy the build on it:
> yarn global install http-server
> http-server ./dist/POC-CamundaModeler/

Step 5: Open your browser on 'BPMN viewer demo' tabsheet.
The BPMN diagram is not displayed and the following error appears on the console:

    ERROR TypeError: this._createContainer is not a function
        at xl.nt (Viewer.js.pre-build-optimizer.js:122)
        at new xl (Modeler.js.pre-build-optimizer.js:129)
        at t._next (bpmn-viewer.component.ts:33)
        at t.__tryOrUnsub (Subscriber.js.pre-build-optimizer.js:196)
        at t.next (Subscriber.js.pre-build-optimizer.js:134)
        at t._next (Subscriber.js.pre-build-optimizer.js:77)
        at t.next (Subscriber.js.pre-build-optimizer.js:54)
        at t._next (map.js.pre-build-optimizer.js:41)
        at t.next (Subscriber.js.pre-build-optimizer.js:54)
        at t._next (filter.js.pre-build-optimizer.js:38)


Notice that application is working well when application is built with :

-> buildOptimizer = false &  optimization = false ( ng build --configuration=production-not-optimized )
-> buildOptimizer = false &  optimization = true  ( ng build --configuration=production-optimized )
-> buildOptimizer = true  &  optimization = false ( ng build --configuration=production-buildoptimizer )

but not workking when buildOptimizer and optimization are both true with following command:
ng build --configuration=production-optimized
or
ng build --configuration=production-full

Why???
