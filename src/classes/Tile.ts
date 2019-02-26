export default class Tile {
    constructor() {

    }
    private _image:String;
    private _name: String;
    private _points:number;
    private _specialization:object;

    get image(){
        return this._image;
    }

    get name(){
        return this._name;
    }

    get points(){
        return this._points;
    }
}