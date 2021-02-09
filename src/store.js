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
    "max_top":400,
});

let first_pipe = writable({
    "height":0,
    "top":0,
    "gap":0,
    "show":true,
    "left":0,
    "width":50,
});

let second_pipe = writable({
    "height":0,
    "top":0,
    "gap":0,
    "show":true,
    "left":0,
    "width":50,
});

export {frame,first_pipe,second_pipe};