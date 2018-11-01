export class Santa {
    x: number
    y: number

    constructor() {
        this.x = 0;
        this.y = 0; 
    }

    step(direction: string) {
        switch(direction) {
            case "^":
                this.y += 1;
                break;
            case ">":
                this.x += 1;
                break;
            case "v":
                this.y -= 1;
                break;
            case "<":
                this.x -= 1;
                break;
        }
        return {x: this.x, y: this.y};
    }

    dance(directions: string) {
        let pos;
        directions.split('').forEach(dir => {
            pos = this.step(dir);
        })
        return pos;
    }
}