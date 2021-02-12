<script>

    import { frame,pipe,bird } from "../store";
    import PipePair from "./PipePair.svelte";
    import Ground from "./Ground.svelte";
    import Bird from "./Bird.svelte";

    let pipe1 = Object.create(pipe);
    let pipe2 = Object.create(pipe);

    function random_top() {
      return ( $frame.min_top+($frame.max_top-$frame.min_top)*Math.random() );
    }

    function reset(pipe) {
      pipe.left = $frame.width+pipe.width;
      pipe.height = random_top();
      pipe.show = true;
      return pipe;
    }

    function move_pipe(pipe1,pipe2) {

      if( pipe1.show && pipe1.left <= pipe1.width*-1 ){
        // If the first pipe pass throught device screen then hide the pipe
        pipe1.show = false;
        return pipe1;
      }

      if( pipe1.show ){
        // move the pipe while visible
        pipe1.left -= $frame.frame_speed;
      }

      if( pipe2.left < $frame.width*(1-$frame.generate_pipe_percent) 
          && pipe2.show && !pipe1.show
      ){
        // If second pipe pass throught part of the device width, reveal the first pipe
        pipe1 = reset(pipe1);
      }

      return pipe1;
    }

    function next_frame() {
      // Move both pipes
      pipe1 = move_pipe(pipe1,pipe2);
      pipe2 = move_pipe(pipe2,pipe1);
    }

    function start_game() {
      pipe1.show = true;
      pipe2.show = false;
      pipe1.left = pipe2.left = $frame.width-pipe1.width;
      pipe1.height = pipe2.height = random_top();
      
      // setInterval(() => {
      //   next_frame();
      // }, 1000/90);
    }

    start_game();

</script>

<main class="game">
  {$frame.height+" x "+$frame.width}
  <button on:click={next_frame}>Move pipe</button>
  <Bird {...bird} />
  <PipePair {...pipe1} />
  <PipePair {...pipe2} />
  <Ground />
</main>

<style>
    main {
      position: relative;
      border: solid black 1px;
      overflow: hidden;
      margin: 0;
      width: 100%;
      height: 100%;
      background-color: lightblue;
    }
  </style>