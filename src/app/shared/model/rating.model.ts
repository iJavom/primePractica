//Otra manera de hacer los model
export class Rating {
    rate : number;
    count : number;

    constructor(rate?:number,count?:number){
        this.rate = rate ?? 0;
        this.count = rate ?? 0;

        // ??
        // undefined -> 0
        // null -> 0;
        // 0 -X
        // "" -x

        // ||
        // undefined -> 0
        // null -> 0
        // 0 -> 0
        // "" -> 0
    }
}