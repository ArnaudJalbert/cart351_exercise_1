/*
    blueprint for particles that will be built in main canvas
*/

class Particles{

    constructor(ctx, canvas, x, y, dir_x, dir_y, size, fill_color, stroke_color, speed, shadow, mouse, max_size, min_size, alt_color){
        // testing if the object can access the context + setting the context
        this.ctx = ctx;

        // testing if canvas is accessible
        this.canvas = canvas;

        // starting positions
        if (!(x >=0 && x<=window.innerWidth && y>=0 && y<= window.innerHeight)) {console.log("Starting positions out of bound!")}
        this.x = x;
        this.y = y;

        // directions of the particle
        this.dir_x = dir_x;
        this.dir_y = dir_y;

        // size of the particle
        this.size = size;

        // color of the particle's fill
        this.fill_color = fill_color;
        this.org_color = fill_color;
        // color of the particle's stroke
        this.stroke_color = stroke_color;
        // alt color when moue is over the circle
        this.alt_color = alt_color

        // speed of the particles
        this.speed = speed;
        this.org_speed = speed

        // shadow properties
        this.shadow = shadow;

        // mouse properties
        this.mouse = mouse;

        // grow up or down
        this.max_size = max_size;
        this.min_size = min_size;
        if(size > max_size/2)
            this.grow = true;
        else
            this.grow = false;
    }

    drawCircle(){
        this.ctx.beginPath();
        this.ctx.fillStyle = this.fill_color;
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, true);
        this.ctx.fill();
    }

    updateCircle(){
        // checking boundaries and changing directions if necesarry
        this.boundaries()

        // updating the x and y positions of the circle
        this.x += this.dir_x*this.speed;
        this.y += this.dir_y*this.speed;

        if(this.size > this.max_size) this.grow = false;
        if(this.size < this.min_size) this.grow = true;

        if(this.grow) this.size+=0.2;
        else this.size-=0.1;

        this.mouse_interact()

        this.drawCircle()
    }

    boundaries(){
        if(this.x + this.size > this.canvas.width || this.x + this.size < 0)
        {
            this.dir_x = -this.dir_x;
            this.speed = this.org_speed;
        }

        if(this.y + this.size > this.canvas.height || this.y + this.size < 0)
        {
            this.dir_y = -this.dir_y;
            this.speed = this.org_speed;
        }
    }

    mouse_interact(){
        if(this.mouse.x+this.mouse.radius > this.x
        && this.mouse.x-this.mouse.radius < this.x
        && this.mouse.y+this.mouse.radius > this.y
        && this.mouse.y-this.mouse.radius < this.y){
            this.fill_color = this.alt_color;
            if(this.size < this.max_size)
                this.size+=1;
            this.speed = 6
        }
        else{
            this.fill_color = this.org_color;
        }
    }
}

export {Particles};