function init_events_listeners(ctx){
    window_particles_resize(ctx);
}

function window_particles_resize(ctx){
    console.log("From event listeners file: " + ctx)
}

export {init_events_listeners}