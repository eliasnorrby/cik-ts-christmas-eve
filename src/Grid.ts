import { House } from "./House";

export class Grid {
    nwHouses: [House[]]
    neHouses: [House[]]
    seHouses: [House[]]
    swHouses: [House[]]
    houses: [House[]]
    quadrants: any

    /*
        |
     NW | NE
    ---------- 
     SW | SE
        |

    */

    constructor() {
        this.neHouses = [[]];
        this.seHouses = [[]];
        this.swHouses = [[]];
        this.nwHouses = [[]];
        this.houses = [[]];
        this.quadrants = [this.neHouses, this.seHouses, this.swHouses, this.nwHouses];
    }

    visitHouseAt(x: number, y: number) {
        let quadrant = this.selectQuadrant(x,y);

        switch(quadrant) {
            case "NE":
                this.houses = this.neHouses;
                break;
            case "SE":
                this.houses = this.seHouses;
                y = -y;
                break;
            case "SW":
                this.houses = this.swHouses;
                x = -x;
                y = -y;
                break;
            case "NW":
                this.houses = this.nwHouses;
                x = -x;
                break;
        }

        if (!this.hasRowOfHousesAt(x)) {
            this.houses[x] = [];
        }
        if (!this.hasHouseAt(x,y)) {
            this.houses[x][y] = new House(x,y);
        }
        this.houses[x][y].giveGift();
    }
    
    getNumberOfHousesWithGifts(): number {
        let count = 0;
        
        this.quadrants.forEach(q => {
            count += this.getNumberOfHousesWithGiftsInQuadrant(q);
        })

        return count;
    }

    getNumberOfHousesWithGiftsInQuadrant(quadrant: [House[]]): number {
        let count = 0;
        quadrant.filter(row => row != undefined && row.length > 0)
            .forEach(r => {
                r.filter(h => h != undefined && h.hasGift())
                .forEach(() => {
                    count++;
                });
            });
        return count;
    }

    getTotalNumberOfGifts(): number {
        let count = 0;
        
        this.quadrants.forEach(q => {
            count += this.getTotalnumberOfGiftsInQuadrant(q);
        })

        return count;
    }

    getTotalnumberOfGiftsInQuadrant(quadrant: [House[]]): number {
        let count = 0;
        quadrant.filter(row => row != undefined && row.length > 0)
            .forEach(r => {
                r.filter(h => h != undefined && h.hasGift())
                .forEach((h) => {
                    count += h.nGifts;
                });
            });
        return count;
    }

    selectQuadrant(x: number, y: number): string {
        if (x >= 0) { return y >= 0 ? "NE" : "SE"; } 
        else { return y >= 0 ? "NW" : "SW"; }
    }

    hasRowOfHousesAt(x: number): boolean {
        return Boolean(this.houses[x]);
    }

    hasHouseAt(x: number, y: number): any {
        return Boolean(this.houses[x][y]);
    }

}