import { Auth } from '@aws-amplify/auth';

Auth.configure({
  region: 'eu-central-1',
  userPoolId: 'eu-central-1_xrJk5G4GN',
  userPoolWebClientId: '4nlgeafph8jl8thlll5tbbuvtv',
  // oauth: {
  //   redirectSignIn: 'https://app.dev.env.vocably.pro',
  //   redirectSignOut: 'https://app.dev.env.vocably.pro',
  //   domain: 'auth.dev.env.vocably.pro',
  //   scope: ['email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
  //   responseType: 'code',
  //   options: {
  //     AdvancedSecurityDataCollectionFlag: true,
  //   },
  // },
});

// Amazon Cognito
Cypress.Commands.add(
  'login',
  (username = Cypress.env('USERNAME'), password = Cypress.env('PASSWORD')) => {
    const log = Cypress.log({
      displayName: 'COGNITO LOGIN',
      message: [`🔐 Authenticating | ${username}`],
      // @ts-ignore
      autoEnd: false,
    });

    log.snapshot('before');

    const signIn = Auth.signIn({ username, password });

    cy.wrap(signIn, { log: false }).then((cognitoResponse) => {
      const keyPrefixWithUsername = `${cognitoResponse.keyPrefix}.${cognitoResponse.username}`;

      window.localStorage.setItem(
        `${keyPrefixWithUsername}.idToken`,
        cognitoResponse.signInUserSession.idToken.jwtToken
      );

      window.localStorage.setItem(
        `${keyPrefixWithUsername}.accessToken`,
        cognitoResponse.signInUserSession.accessToken.jwtToken
      );

      window.localStorage.setItem(
        `${keyPrefixWithUsername}.refreshToken`,
        cognitoResponse.signInUserSession.refreshToken.token
      );

      window.localStorage.setItem(
        `${keyPrefixWithUsername}.clockDrift`,
        cognitoResponse.signInUserSession.clockDrift
      );

      window.localStorage.setItem(
        `${cognitoResponse.keyPrefix}.LastAuthUser`,
        cognitoResponse.username
      );

      window.localStorage.setItem(
        'amplify-authenticator-authState',
        'signedIn'
      );
      log.snapshot('after');
      log.end();
    });

    cy.visit('/');
  }
);
