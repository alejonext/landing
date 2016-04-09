import 'angular';
import 'angular-messages';
import 'ng-dialog';
import * as h from './home.js';

angular
	.module('open', [ 'ng', 'ngMessages', 'ngDialog'])
	.controller(h.name, h.fn);