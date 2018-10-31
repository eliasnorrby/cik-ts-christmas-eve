import { Grid } from "../src/Grid";

describe('Grid', () => {
    let grid: Grid

    beforeEach(() => {
        grid = new Grid();
    })

    describe('it should handle visit in each quadrant:', () => {
        
        it('NE quadrant', () => {
            grid.visitHouseAt(0,0);
            grid.visitHouseAt(1,2);
            grid.visitHouseAt(2,2);
            grid.visitHouseAt(4,2);
    
            let count = grid.getNumberOfHousesWithGiftsInQuadrant(grid.neHouses)
            expect(count).toBe(4);
        })
        it('SE quadrant', () => {
            grid.visitHouseAt(45,-7);
            grid.visitHouseAt(1,-2);
            grid.visitHouseAt(2,-3);
            grid.visitHouseAt(4,-2);
    
            let count = grid.getNumberOfHousesWithGiftsInQuadrant(grid.seHouses)
            expect(count).toBe(4);
        })
        it('SE quadrant', () => {
            grid.visitHouseAt(1,-2);
            grid.visitHouseAt(14,-7);
            grid.visitHouseAt(2,-5);
            grid.visitHouseAt(45,-4);
    
            let count = grid.getNumberOfHousesWithGiftsInQuadrant(grid.seHouses)
            expect(count).toBe(4);
        })
        it('SW quadrant', () => {
            grid.visitHouseAt(-5,-3);
            grid.visitHouseAt(-1,-2);
            grid.visitHouseAt(-2,-2);
            grid.visitHouseAt(-4,-2);
    
            let count = grid.getNumberOfHousesWithGiftsInQuadrant(grid.swHouses)
            expect(count).toBe(4);
        })
        it('should handle visits to houses in NW quadrant', () => {
            grid.visitHouseAt(-1,38);
            grid.visitHouseAt(-1,2);
            grid.visitHouseAt(-2,2);
            grid.visitHouseAt(-4,2);
    
            let count = grid.getNumberOfHousesWithGiftsInQuadrant(grid.nwHouses)
            expect(count).toBe(4);
        })
    })

    it('should not count the same house twice', () => {
        grid.visitHouseAt(5,5);
        grid.visitHouseAt(5,5);
        grid.visitHouseAt(5,5);

        expect(grid.getNumberOfHousesWithGifts()).toBe(1);
    })

    it('should count the total number of gifts', () => {
        grid.visitHouseAt(5, 5);
        grid.visitHouseAt(5, 5);
        grid.visitHouseAt(5, 5);
        grid.visitHouseAt(5, -5);
        grid.visitHouseAt(5, -5);
        grid.visitHouseAt(5, -5);
        grid.visitHouseAt(-14, 37);
        grid.visitHouseAt(-14, 37);
        grid.visitHouseAt(-14, 37);

        expect(grid.getTotalNumberOfGifts()).toBe(9);
    })

    xit('Should generate instructions', () => {
        let ins = "";
        let dirs = ["^", ">", "v", "<"]
        for (let i = 0; i < 100; i++) {
            let index = Math.floor(4*Math.random());
            ins += dirs[index]
        }
        console.log(ins);
    })
})