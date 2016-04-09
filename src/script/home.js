export const name = 'home';
export class f {
	static $inject = [
		'$scope',
		'ngDialog',
		'$http',
		'url',
		'geolocation'
	];
	constructor(scope, ngdilalog, http, name, geo) {
		this.scope = scope;
		this.dialog = ngdilalog;
		this.http = http.post;
		this._url = name;
		this.geo  = 'SIN UBICACION';
		geo.getLocation().then(data =>{
			this.geo = `lat:${data.coords.latitude},long:${data.coords.longitude}`
		});
	}

	sender (){
		this.http(`${this._url}${this.class}/with/key/WM_9WK0RoXywnW0harCb_`, {
			'value1' : `${this.name} <${this.email}>`,
			'value2' : this.movil,
			'value3' : this.geo,
		}).then(() => {
			this.name = '';
			this.movil = '';
			this.email = '';
			this.class = '';

			this.dialog.open({
				template : 'ok.html',
			});
		});
	}
}