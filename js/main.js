import {Particles} from './Particles.js';
import {init_events_listeners} from './events_listeners.js';

window.onload = function(){
    /* test on the console */
    console.log("Hello World");

    // getting the canvas element and init the 2d context
    const canvas = document.getElementById("main_canvas");
    const ctx = canvas.getContext('2d');

    // init the event listeners
    init_events_listeners(ctx);

    let test = new Particles(ctx);
    console.log(test);

}