import { writable } from "svelte/store";

let frame = writable({
    "GameOver":false,
    "GameStarted":false,
    "score":0,
    "velocity":0,
    "height":window.screen.height,
    "width":window.screen.width,
    "generate_pipe_percent":0.7,
    "frame_speed":1,
    "min_top":70,
    "max_top":350,
});

let pipe = {
    "height":0,
    "gap":150,
    "show":true,
    "left":0,
    "width":50,
}

let bird = {
    "left":40,
    "top":(window.screen.height-20)/2,
    "size":20,
}

export {frame,pipe,bird};