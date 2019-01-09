
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
const 	{ 	SpecReporter } 	= require ( 'jasmine-spec-reporter' 		) ,
			HtmlReporter 	= require ( 'protractor-beautiful-reporter' ) ;

const 	credentials = {
			password : process.env.SMARTDEPLOY_WORKBENCH_PASSWORD ,
			username : process.env.SMARTDEPLOY_WORKBENCH_USERNAME
		} ,

		// Consolidated our application and e2e paths into a single object
		tsconfig 	= require ( './tsconfig.json' );

exports.config = {
	allScriptsTimeout 	: 11000 					,
	baseUrl             : 'http://localhost:4200/' 	,
	capabilities        : {
		browserName 	: 'chrome'
	} ,
	directConnect 		: true 						,
	framework           : 'jasmine' 				,
	jasmineNodeOpts 	: {
		defaultTimeoutInterval 	: 30000 			,
		print                   : function () {} 	,
		showColors              : true
	} ,
	params 				: {
		password 		: credentials.password ,
		username 		: credentials.username
	} ,
	specs 				: [
		'./e2e/**/*.e2e-spec.ts'
	] ,
	suites 				: {
		authentication 	: './e2e/features/authentication/*.e2e-spec.ts' ,
		brand           : './e2e/features/brand/*.e2e-spec.ts' 			,
		general         : './e2e/features/general/*.e2e-spec.ts' 		,
		api             : [
			'./e2e/features/general/about/api.about.e2e-spec.ts' 		,
			'./e2e/features/authentication/login/api.login.e2e-spec.ts' ,
			'./e2e/features/user/password-change/api.password-change.e2e-spec.ts'
		] ,
		user 			: [
			'./e2e/features/user/password-change/*.e2e-spec.ts'
		]
	} ,
	onPrepare () {

		require ( 'ts-node' ).register ({
			project : 'e2e/tsconfig.e2e.json'
		});

		// [[ TODO ]] https://github.com/angular/angular-cli/issues/9632
		require ( 'tsconfig-paths' ).register ({
			project : 'e2e/tsconfig.e2e.json' 	,
			baseUrl : 'e2e/' 					,
			paths  	: tsconfig.compilerOptions.paths
		});

		require ( './e2e/product/locators/data.locator' ) ( protractor );

		jasmine.getEnv ().addReporter ( new SpecReporter ({
			spec : {
				displayStacktrace : true
			}
		}));

		jasmine.getEnv ().addReporter ( new HtmlReporter ({
			baseDirectory       : './build/reports/test-functional' 		,
			docTitle            : 'SmartDeploy Functional Test Results' 	,
			jsonsSubfolder      : 'json' 									,
			preserveDirectory   : false
		}).getJasmine2Reporter ());

	}
};
