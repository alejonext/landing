const url = '';
export const name = 'home';
export class f {
	constructor(scope, ngdilalog, http) {
		this.scope = scope;
		this.dialog = ngdilalog;
		this.http = http.post;
	}

	sender (){
		this.http(url, this.data).then((err) => {
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

f.$inject = [
		'$scope',
		'ngDialog',
		'$http'
	];