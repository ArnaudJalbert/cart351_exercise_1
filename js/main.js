import {Particles} from './Particles.js';
import {Mouse} from './Mouse.js';

window.onload = function(){
    /* test on the console */
    console.log("Hello World");

    // getting the canvas element and init the 2d context
    const canvas = document.getElementById("main_canvas");
    // setting up the widt and height of the canvas
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    const ctx = canvas.getContext('2d');
    ctx.globalCompositeOperation = "luminosity";

    // mouse object to keep track of the mouse's movement
    let mouse = new Mouse(0,0, 150);

    // variables for loop
    let num_part = 150;
    let max_size = 100;
    let min_size = 20;
    let min_speed = 0.75;
    const directions = [[1,1],[-1,1],[1,-1],[-1,-1]]
    let count = 0;

    // init the event listeners
    init_events_listeners(ctx);

    let particles = [];
    for(let i =0; i<num_part; i++){
        let x = Math.random()*canvas.width;
        let y = Math.random()*canvas.height;
        let dir = Math.floor(Math.random()*4)
        let size = (Math.random()*(max_size-min_size)) + min_size;
        let speed = Math.random()+min_speed;
        let color;
        let alt_color;
        if(i%2==1){
            color = "#CEE7E6";
            alt_color = "#FFCF00"
        }
        else{
            color = "#FC7753"
            alt_color="#69D1C5"
        }

        
        particles.push(new Particles(ctx, canvas, x, y, directions[dir][0], directions[dir][1], size, color, "white", speed, 0, mouse, max_size, min_size, alt_color))
    }

    /*--------------- STARTING ANIMATION ----------------*/

    requestAnimationFrame(animate);

    function animate(){
        ctx.clearRect(0,0,canvas.width, canvas.height)
        for(let i = 0; i<particles.length; i++){
            particles[i].updateCircle();
        }
        requestAnimationFrame(animate)
    }

    /*--------------- EVENTS LISTENERS ----------------*/

    function init_events_listeners(){
        window.addEventListener("resize", function(){
            canvas.height = window.innerHeight;
            canvas.width = window.innerWidth;
        });

        window.addEventListener("mousemove", function(event){
            mouse.x = event.x;
            mouse.y = event.y;
            count++;
            if (count%20 == 0){
                count = 1;
                let dir = Math.floor(Math.random()*4)
                let size = (Math.random()*(max_size-min_size)) + min_size;
                let speed = Math.random()+0.75;
                let color;
                if(Math.floor((Math.random()*2+1))==1)
                    color = "#CEE7E6";
                else
                    color = "#FC7753"
                particles.push(new Particles(ctx, canvas, mouse.x, mouse.y, directions[dir][0], directions[dir][1], size, color, "white", speed, 0, mouse, max_size, min_size))
                particles.shift();
            }
        })

        // document.getElementById('file_box').addEventListener('change', function(){
        //     let selectedFileList = this.files;
        //     for(let i=0; i< selectedFileList.length;i++){
        //         console.log(selectedFileList[i]);
        //     }
        // });
    }
}