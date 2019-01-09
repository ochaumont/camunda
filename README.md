# camunda
POC on camunda workflow engine which details an issue on production compilation with code optimization.

To reproduce the issue, follow the following steps:

Step 1 : Clone the repository.

Step 2: Download the libraries with the following command (Yarn already installed):
> yarn install

Step 3: Compile the project with 'production-optimized' configuration with the following command:
> ng build --configuration=production-optimized

Step 4 : Install an HTTP server and deploy the build on it:
> yarn global install http-server
> http-server ./dist/POC-CamundaModeler/

Step 5: Open your browser on 'BPMN viewer demo' tabsheet.

