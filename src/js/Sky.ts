import {settings} from "./settings";

export class Sky {
    private readonly canvasElement: HTMLCanvasElement
    private readonly ctx: CanvasRenderingContext2D;
    private gradient: CanvasGradient;
    private mouse: { x: number; y: number };

    constructor(canvasElement: HTMLCanvasElement, mouse: { x: number, y: number }) {
        this.canvasElement = canvasElement;
        this.ctx = this.canvasElement.getContext('2d');
        this.mouse = mouse;
        this.resize();
        this.addEventListeners();
        this.generateGradient();
        this.draw();
        return this;

    }
    generateGradient() {
        this.gradient = this.ctx.createLinearGradient(0, 0, this.canvasElement.width, this.canvasElement.height);
        this.gradient.addColorStop(0, settings.sky.gradient[0]);
        this.gradient.addColorStop(1, settings.sky.gradient[1]);
        this.draw();
        return this;
    }
    resize() {
        this.canvasElement.width = window.innerWidth;
        this.canvasElement.height = window.innerHeight ;
        this.generateGradient();
        return this;
    }
    draw() {
        this.ctx.save();
        // this.ctx.rotate(Math.PI/180);
        this.ctx.beginPath();
        this.ctx.fillStyle = this.gradient;
        this.ctx.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);
        this.ctx.closePath();
        this.ctx.restore();
        return this;
    }
    addEventListeners() {
        window.addEventListener('resize', (e) => {
            this.resize();
        });
    }
}


