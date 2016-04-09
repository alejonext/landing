import 'angular';
import 'angular-messages';
import 'ng-dialog';
import * as h from './home.js';
import * as a from './minH.js';

angular
	.module('open', [ 'ng', 'ngMessages', 'ngDialog'])
	.controller(h.name, h.f)
	.directive(a.name, a.f)
	.constant('url', 'http');