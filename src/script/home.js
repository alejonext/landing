export const name = 'home';
export class f {
	static $inject = [
		'$scope',
		'ngDialog',
		'$http',
		'url'
	];
	constructor(scope, ngdilalog, http, name) {
		this.scope = scope;
		this.dialog = ngdilalog;
		this.http = http.post;
		this._url = name;
	}

	sender (){
		this.http(this._url, this.data).then((err) => {
			this.dialog.open({
				template: 'externalTemplate.html',
				scope: this.scope
			});
		});
	}

	close(){
		this.dialog.closeAll();
	}
}