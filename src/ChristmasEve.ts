import { Santa } from "./Santa";
import { Grid } from "./Grid";
import { instructions10, instructions100, instructions25, instructions8k } from "./Instructions";

export class ChristmasEve {
    santa: Santa
    grid: Grid

    constructor(santa: Santa, grid: Grid) {
        this.santa = santa;
        this.grid = grid;
    }

    itsChristmas(instructions: string): number {
        this.grid.visitHouseAt(0,0);
        instructions.split('').forEach(dir => {
            let coords = this.santa.step(dir);
            this.grid.visitHouseAt(coords.x, coords.y);
        })

        return this.grid.getNumberOfHousesWithGifts();
    }
}