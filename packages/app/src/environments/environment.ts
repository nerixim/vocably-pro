// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  chromeExtensionId: 'cdjdmfegiddjmikilbjoaofmjmdgceib',
  auth: {
    region: 'eu-central-1',
    userPoolId: 'eu-central-1_e2NoKqwUm',
    userPoolWebClientId: '4p94j2g6678lieetfnso636edd',
    oauth: {
      domain: 'auth.vocably.pro',
      scope: ['email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
      redirectSignIn: 'http://localhost:8030',
      redirectSignOut: 'http://localhost:8030',
      responseType: 'code',
      options: {
        AdvancedSecurityDataCollectionFlag: true,
      },
    },
  },
  api: {
    baseURL: 'https://api.vocably.pro',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
