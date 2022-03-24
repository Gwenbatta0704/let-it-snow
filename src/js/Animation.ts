import {Snowflake} from "./Snowflake";

export const animation ={
    // @ts-ignore
    init(canvas, snows){
        this.snows = snows;
        this.canvas = canvas;
        this.animate();
        return this;
    },
    animate(){
        this.canvas.draw();
        this.canvas.width = window.innerWidth;
        this.snows.forEach((snow:Snowflake)=>{
            snow.update();
        });
        requestAnimationFrame(()=>{
            this.animate();
        });
    },
};
