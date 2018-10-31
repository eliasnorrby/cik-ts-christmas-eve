import { instructions10, instructions25, instructions8k } from "../src/Instructions";
import { Santa } from "../src/Santa";
import { Grid } from "../src/Grid";
import { ChristmasEve } from "../src/ChristmasEve";

describe('ChristmasEve', () => {

    let christmasEve: ChristmasEve

    beforeEach(() => {
        christmasEve = new ChristmasEve(new Santa(), new Grid());
    })

    let cases = [
        { i: ">", n: 2},
        { i: "^>v<", n: 4},
        { i: "^v^v^v^v^v", n: 2},
        { i: instructions10, n: 9 },
        { i: instructions25, n: 17 },
    ]
    
    cases.forEach(({ i, n }) => {
        it('should visit the correct number of unique houses', () => {
            expect(christmasEve.itsChristmas(i)).toBe(n);
        })
    })

    it('Should print out the number of houses visited for long instruction', () => {
        console.log(christmasEve.itsChristmas(instructions8k))
    })

    it('Should record the correct number of gifts handed out for long instruction', () => {
        christmasEve.itsChristmas(instructions8k);
        expect(christmasEve.grid.getTotalNumberOfGifts()).toBe(8193);
    })

})