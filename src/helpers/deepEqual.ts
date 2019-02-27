export default function deepEqual(a:any, b:any):boolean {
	let eq:boolean = true;	
	if (Array.isArray(a)) {


		


		if(a.length===0 ) {
			if(b.length===0) {
				return true;
			}
			return false;
		}


		;

		return  true===( (typeof a===typeof b) && a.length === b.length &&
					((a.length === 1 && a[0] === b[0]) || a.reduce((p, n, i) => {
				return eq && deepEqual(n, b[i]) && deepEqual(a[0],b[0]);
			}))
		
		);
	};

	
	if(a instanceof Set) {
		return (b instanceof Set) && a.size ===b.size && 
			(()=>{
				// let _a = Array.from(a), _b = Array.from(b);

					let eq2 = false;
				
					for(let x in a) 
						{
							eq = eq && eq2;
						for(let y in b) {
							eq2 = eq2 || deepEqual(x,y);
						}
						
						}

				return eq;
			})()
		
		;
	}
	
	
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



let a:any =[];
let b:any={f:[1,2,'Cześć']};
let s0 = new Set();
let s1 = new Set();


s0.add(1).add((new Set().add(3).add([5, 4])));
s1.add((new Set().add(3).add([5, 4]))).add(1);





console.log(deepEqual([1],[1]));
console.log(deepEqual(s0,s1));