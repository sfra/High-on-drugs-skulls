/**
 *
 * An extension of Set class providing additional functionalities
 * @constructs MMatrix
 * @extends Set
 */
export default class SSet<T> extends Set<T>{

    constructor(){
        super();

    };



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
