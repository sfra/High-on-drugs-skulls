export default class SSet<T>{

    constructor(set:Set<T>=new Set<T>()){
        this.set = set;
    };

    private set:Set<T>;
    

    public static equality:(a:any, b:any)=>boolean;

    public add(el:T):SSet<T> {
        

        
        let contains = false;
        this.set.forEach((inside )=> {
            contains = contains || SSet.equality(el,inside);
        });
s
        if(!contains) {
            this.set.add(el );
        }
        
        return this;
    }
    
}