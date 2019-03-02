export default class Tile {
    constructor(name:String) {
        this._name = name;
        this._selected=false;
        
    }
    private _image:String;
    private _name: String;
    private _points:number;
    private _specialization:object;
        private _selected:boolean;

    get image(){
        return this._image;
    }

    get name(){
        return this._name;
    }

    get points(){
        return this._points;
    }
    
    get selected(){
        return this._selected; 
    }

    set selected(sel:boolean) {
        this._selected=sel;
    }
}