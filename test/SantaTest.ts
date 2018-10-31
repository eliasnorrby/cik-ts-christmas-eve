import { Santa } from "../src/Santa";

describe('Santa', () => {
    let mockGrid
    let santa: Santa

    beforeEach(() => {
        mockGrid = {
            visitHouseAt: (x, y) => {

            }
        }
        
        santa = new Santa();
    })

    it('should start in origin', () => {
        expect(santa.x).toBe(0);
        expect(santa.y).toBe(0);
    })

    it('should be able to step north', () => {
        let newPos = santa.step("^");
        expect(newPos).toEqual({x: 0, y: 1})
    })
    it('should be able to step east', () => {
        let newPos = santa.step(">");
        expect(newPos).toEqual({x: 1, y: 0})
    })
    it('should be able to step south', () => {
        let newPos = santa.step("v");
        expect(newPos).toEqual({x: 0, y: -1})
    })
    it('should be able to step west', () => {
        let newPos = santa.step("<");
        expect(newPos).toEqual({x: -1, y: 0})
    })
    
    it('should be able to take multiple steps', () => {
        let newPos = santa.dance("^^^^^>");
        expect(newPos).toEqual({x: 1, y: 5})
    })

    it('should go in a circle when instructed', () => {
        let newPos = santa.dance("^>v<");
        expect(newPos).toEqual({x:0, y:0})
    })

})