<script>

    import { frame,first_pipe,second_pipe } from "../store";
    import Pipe from "./Pipe.svelte";

    // $first_pipe.height = $second_pipe.height = 250;
    

    function random_top() {
      return ( $frame.min_top+($frame.max_top-$frame.min_top)*Math.random() );
    }

    function start_game() {
      $first_pipe.left = $second_pipe.left = $frame.width+$first_pipe.width;
      $first_pipe.height = $second_pipe.height = random_top();
    }

    function reset(pipe) {
      pipe.left = $frame.width+pipe.width;
      pipe.height = random_top();
      pipe.show = true;
    }

    function move_pipe(pipe_a,pipe_b) {
      if( pipe_a.show && pipe_a.left <= pipe_a.width*-1 ){
        pipe_a.show = false;
        return;
      }

      if( pipe_a.show ){
        pipe_a.left -= $frame.frame_speed;
      }

      if( pipe_b.left == $frame.width*(1-$frame.frame_speed) ){
        reset(pipe_a);
      }
    }

    function next_frame() {
      move_pipe(first_pipe,second_pipe);
      move_pipe(second_pipe,first_pipe);
    }

    setInterval(() => {
      next_frame();
    }, 1000/90);

    start_game();

</script>

<main class="game">
  {$frame.height+" x "+$frame.width}
  <button on:click={start_game}>Move pipe</button>
  <Pipe />
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