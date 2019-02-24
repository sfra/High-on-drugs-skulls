export default function deepEqual(a:any, b:any):boolean {
	let eq:boolean = true;	
	if (Array.isArray(a)) {


		return a.length === b.length && ((a.length === 1 && a[0] === b[0]) || a.reduce((p, n, i) => {
			return eq && deepEqual(n, b[i]) && deepEqual(a[0],b[0]);
		}));
	};

	if (typeof a === 'object') {

		
		for (let prop in a) {
			eq = eq && deepEqual(a[prop], b[prop]);
		};

		for (let prop in b) {
			eq = eq && !(typeof b[prop] !== 'undefined' && typeof a[prop] === 'undefined');
		}
		return eq;
	}
	return a === b;

};


