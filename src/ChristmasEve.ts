import { Santa } from "./Santa";
import { Grid } from "./Grid";
import { instructions10, instructions100, instructions25, instructions8k } from "./Instructions";

export class ChristmasEve {
    santa: Santa
    robot: Santa
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

    itsChristmasWithRobots(instructions: string): number {
        this.robot = new Santa();

        this.grid.visitHouseAt(0,0);
        let count = 1;
        instructions.split('').forEach(dir => {
            if (count % 2 == 0) {
                let coords = this.santa.step(dir);
                this.grid.visitHouseAt(coords.x, coords.y);
            } else {
                let coords = this.robot.step(dir);
                this.grid.visitHouseAt(coords.x, coords.y);
            }
            count++;
        })

        return this.grid.getNumberOfHousesWithGifts();
    }
}