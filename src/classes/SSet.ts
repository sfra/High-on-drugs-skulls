/**
 *
 * The Set class wrapper
 * @constructs MMatrix
 */
export default class SSet<T> {

    constructor(){
        this.set = new Set<T>();
        this.size =0;
    };


    /**
    * Wrapped Set
    * @type {Set}
    * @private
    */
    private set:Set<T>;

    /**
    * The size of SSet
    * @type {number}
    * @private
    */
    public size:number;


    /**
    * Defines equality between T objects. If two objects are deeply equal, and the SSet contains one of them then the second cannot be added.
    * @type {(any, any)=>boolean}
    */
    public static equality:(a:any, b:any)=>boolean;

    /**
     * Ads element to SSet, counterpart of the method add from the Set class.
     *
     * @param {T} el
     * @returns {boolean} `
     *
     */
    public add(el:T):SSet<T> {
        let contains = false;
        

        for(let ob of this.set) {
            contains = contains || SSet.equality(ob,el);
            if(contains) {
                break;
            }
        }

        


        if(!contains) {
            this.set.add(el);
            this.size+=1;
        }

        return this;
    }


    public has(el:T) {
        for(let ob of this.set) {
            if(SSet.equality(ob,el)) {
                return true;
            }
        }
        return false;
    }





}
