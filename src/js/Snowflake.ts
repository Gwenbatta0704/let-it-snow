import {settings} from "./settings";

export class Snowflake{
    private radius:number;
    private position:{x:number,y:number};
    private ctx: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;
    private opacity:number;
    private speed: {x:number,y:number};
    private mouse: {x:number,y:number};
    // private hypothenuse: number;
    private color: string;


    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, mouse: { x: number; y: number }) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.mouse = mouse;
        this.generate();
        this.draw();
    }

    private generate() {
        this.opacity = settings.snowflake.opacity.min + Math.random() * (settings.snowflake.opacity.max - settings.snowflake.opacity.min),
        this.speed = {
            x: settings.snowflake.speedX.min + Math.random() * (settings.snowflake.speedX.max - settings.snowflake.speedX.min),
            y: settings.snowflake.speedY.min + Math.random() * (settings.snowflake.speedY.max - settings.snowflake.speedY.min),
        }
        this.radius = settings.snowflake.radius.min + Math.random() * (settings.snowflake.radius.max - settings.snowflake.radius.min);
        this.position = {x: this.radius + Math.random() * ((this.canvas.width + this.radius) - this.radius) ,y:(this.canvas.height*1.5+ Math.random() * ((this.canvas.height+ this.radius*2) - this.canvas.height*1.5 ))}
        // this.position = {x: this.radius + Math.random() * ((this.canvas.width + this.radius) - this.radius) ,y:-(this.canvas.height*1.5+ Math.random() * ((this.canvas.height+ this.radius*2) - this.canvas.height*1.5 ))}
        this.color = 'white'
        this.draw();
        return this
    }
    draw(){
        this.ctx.beginPath();
        this.ctx.globalAlpha = this.opacity;
        this.ctx.fillStyle = 'white';
        this.ctx.arc(this.position.x,this.position.y,this.radius, 0, 2*Math.PI);
        this.ctx.fill();
        this.ctx.globalAlpha = 1;
    }
    update(){
        if (this.position.y<= - this.radius) {
            this.speed.y = 0
            this.speed.x = 0
            this.position.y = this.speed.y;
            this.draw();
        }
        this.position.y -= this.speed.y;
        this.position.x += this.speed.x;
        this.draw();
    }
}