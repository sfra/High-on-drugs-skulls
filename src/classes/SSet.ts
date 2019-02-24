export default class SSet<T> extends Set<T>{

    constructor(){
        super();
        
    };

 
    

    public static equality:(a:any, b:any)=>boolean;

    public sadd(el:T):SSet<T> {
        

        
        let contains = false;
        super.forEach((inside )=> {
            contains = contains || SSet.equality(el,inside);
        });

        if(!contains) {
            super.add(el);
        }
        
        return this;
    }
    
}