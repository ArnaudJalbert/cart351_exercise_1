/*
    blueprint for particles that will be built in main canvas
*/

class Particles{

    constructor(ctx){
        // testing if the object can access the context
        this.ctx = ctx;
        console.log("From Particles Class : " + ctx);
    }

    update(){

    }

    draw(){

    }
}

export {Particles};