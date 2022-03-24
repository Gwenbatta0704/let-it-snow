import {Sky} from "./Sky";
import {settings} from "./settings";
import {Snowflake} from "./Snowflake";
import {animation} from "./Animation";

class Main{
    private readonly ctx: CanvasRenderingContext2D;
    private readonly canvasElement: HTMLCanvasElement;
    private readonly canvas : Sky;
    private snows: Snowflake[];
    private mouse: { x: number; y: number };
    private animation: Animation;

    constructor() {
        this.canvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.mouse = {x: 0, y: 0}
        this.ctx = this.canvasElement.getContext('2d');
        this.snows = [];
        this.canvas = new Sky(this.canvasElement, this.mouse);
        // this.snows = new Skowflake(this.ctx, this.canvasElement, this.mouse);
        this.loadSnow();
        this.animation = animation.init(this.canvas, this.snows)
    }

    private loadSnow() {
        for (let i = 0; i < settings.snowflake.maxCount; i++) {
            this.snows.push(new Snowflake(this.ctx, this.canvasElement, this.mouse));
        }
    }
}
new Main();
