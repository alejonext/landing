import 'angular';
import 'angular-messages';
import 'ng-dialog';
import 'angularjs-geolocation';
import * as h from './home.js';
import * as a from './minH.js';
import * as c from './config.js';

angular
	.module('open', [ 'ng', 'ngMessages', 'ngDialog', 'geolocation'])
	.controller(h.name, h.f)
	.directive(a.name, a.f)
	.config( c.f )
	.constant('url', 'https://maker.ifttt.com/trigger/');