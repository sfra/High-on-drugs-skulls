import { MMatrix } from './MMatrix';
import { Select } from './Select';
import SSet from './SSet';

export class Transition<T> {
    constructor(mmatrix: MMatrix<T>, uppermmatrix: MMatrix<T>) {

        this.mmatrix = mmatrix;
        this.uppermatrix = uppermmatrix;

        this.select = new Select<T>(this.mmatrix);

    }

    private mmatrix: MMatrix<T>;
    private uppermatrix: MMatrix<T>;
    private selected: Set<SSet<[number, number]>>;

    private select: Select<T>;
    public getMmatrix(): MMatrix<T> {

        return this.mmatrix;
    }

    public setMmatrix(mmatrix: MMatrix<T>) {
        this.mmatrix = mmatrix;
    }




    public run(s:SSet<[number,number]>): void {
        let iter:IterableIterator<[[number,number],[number,number]]> = s.entries();
      //console.log(s);
        const selected:boolean[][]= new Array(this.mmatrix.getDx());
//        selected.fill(new Array(this.mmatrix.getDy()).fill(false));

      for(let i=0, maxX=this.mmatrix.getDx();i<maxX; i++) {
          selected[i]=[];
        for(let j=0, maxY=this.mmatrix.getDy();j<maxY; j++) {
            selected[i].push(false);
        }

      }

      let sArrayed = s.toArray();

      for(let i=0, max=sArrayed.length; i<max;i++){

          selected[sArrayed[i][0]][sArrayed[i][1]]=true;
      }



      let selectedNumber = new Array<number>(this.mmatrix.getDy());
      selectedNumber.fill(0);

      for(let i=0; i<this.mmatrix.getDx(); i++ ) {
        for(let j=0; j<this.mmatrix.getDy();j++) {
          if(selected[i][j]){
            selectedNumber[j]+=1 ;
          }
        }
      }
      

        let wasSelected:boolean[]=new Array(this.mmatrix.getDy());

        wasSelected.fill(false);
 
      

        for(let i:number=0; i<this.mmatrix.getDx(); i++){
          


          for(let j:number=0;j<this.mmatrix.getDy();j++){
 //           console.log(wasSelected[j]);
            if(selected[i][j]  || wasSelected[j]) {
              wasSelected[j] =true;
             if(i+selectedNumber[j]<this.mmatrix.getDx()) {
                this.mmatrix.setItem(i,j, this.mmatrix.getItem(i+selectedNumber[j],j));
              } else {
             //   console.log(i+selectedNumber[j]-this.mmatrix.getDx());
               this.mmatrix.setItem(i,j, this.uppermatrix.getItem(i+selectedNumber[j]-this.mmatrix.getDx(),j));
              }
              // else {
              //     // for(let m:number=0, max:number=this.mmatrix.getDx(); m<max; m++) {
              //       this.mmatrix.setItem(i,j, this.uppermatrix.getItem(i+selectedNumber[j]-this.mmatrix.getDy(),j));
              //     // }

              // }
            }
          }


        }



    }

    public runSpecial(x: number, y: number, sset: Set<SSet<[number, number]>>): void {

    }


}
