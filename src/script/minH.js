export const name = 'winHeight';
export function f (win, doc) {
	let getHeight = () => win.innerHeight;
	return {
		link (scope, ele, attrs) {
			let alt = ele[0].offsetHeight;
			let forOther = angular.element(angular.element(doc).find(attrs.winHeight));
			scope.$watch(getHeight, value => {
				let isPositive = ( value - alt );
				if( isPositive ){
					forOther.css('padding-top', isPositive + 'px');
				}
			});
		}
	}
}

f.$inject = [ '$window', '$document' ];
