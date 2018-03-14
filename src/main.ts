/// <reference types="aurelia-loader-webpack/src/webpack-hot-interface"/>
import { Aurelia } from 'aurelia-framework';
import environment from './environment';
import { PLATFORM } from 'aurelia-pal';
import * as Bluebird from 'bluebird';
import 'bootstrap/scss/bootstrap.scss';
import { HttpClient, HttpClientConfiguration } from 'aurelia-fetch-client';

Bluebird.config({warnings: {wForgottenReturn: false}});

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));

  // configure HttpClient
  const httpClient: HttpClient = new HttpClient();

  httpClient.configure((config: HttpClientConfiguration) => {
    config.withBaseUrl('http://localhost:4000');
    config.rejectErrorResponses();
  });

  // register HttpClient
  aurelia.container.registerInstance(HttpClient, httpClient);

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
