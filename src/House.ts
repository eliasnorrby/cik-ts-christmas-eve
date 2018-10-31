import { IHouse } from "./IHouse";

export class House implements IHouse {
    x: number;    
    y: number;
    nGifts: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.nGifts = 0;
    } 

    hasGift(): boolean {
        return this.nGifts > 0;
    }

    giveGift() {
        this.nGifts++;
    }
}