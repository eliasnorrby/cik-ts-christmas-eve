import { House } from "../src/House";

describe("House", () => {
    let house;

    beforeEach(() => {
        let x = 1000*Math.floor(Math.random())-500;
        let y = 1000*Math.floor(Math.random())-500;
        house = new House(x,y);
    })
    
    it('should get not have a gift to begin with', () => {
        expect(house.hasGift()).toBeFalsy();
    })

    it('should return the correct count when given a gift', () => {
        house.giveGift();
        expect(house.nGifts).toBe(1);
        house.giveGift();
        house.giveGift();
        house.giveGift();
        expect(house.nGifts).toBe(4);
    })
})