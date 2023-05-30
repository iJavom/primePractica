//Estilo comun
import { Rating } from "./rating.model";

export class Producto {
    public id:number = 0;
    public title : string = "";
    public price : number = 0;
    public description : string = "";
    public category : string = "";
    public image : string = "";
    public rating : Rating = new Rating();

    constructor(){

    }
}