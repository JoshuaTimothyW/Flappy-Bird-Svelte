<script>

    import { frame,pipe } from "../store";
    import PipePair from "./PipePair.svelte";

    var pipe1 = pipe;
    var pipe2 = pipe;

    function random_top() {
      return ( $frame.min_top+($frame.max_top-$frame.min_top)*Math.random() );
    }

    function start_game() {
      pipe1.show = true;
      pipe2.show = false;
      pipe1.left = pipe2.left = $frame.width-pipe1.width;
      pipe1.height = pipe2.height = random_top();
    }

    function reset(pipe) {
      pipe.left = $frame.width+pipe.width;
      pipe.height = random_top();
      pipe.show = true;
      return pipe;
    }

    function move_pipe(pipe1,pipe2) {

      if( pipe1.show && pipe1.left <= pipe1.width*-1 ){
        console.log("hide first pipe");
        pipe1.show = false;
        return pipe1;
      }

      if( pipe1.show ){
        console.log("move pipe ",pipe1.left);
        pipe1.left -= $frame.frame_speed;
      }

      if( pipe1.left == $frame.width*(1-$frame.frame_speed) ){
        pipe1 = reset(pipe1);
      }

      return pipe1;
    }

    function next_frame() {
      pipe1.left = pipe1.move(20);
      
      // move_pipe(pipe1,pipe2);
      // move_pipe(pipe2,pipe1);
    }

    // setInterval(() => {
    //   next_frame();
    // }, 1000/90);


    start_game();

</script>

<main class="game">
  {$frame.height+" x "+$frame.width}
  <button on:click={next_frame}>Move pipe</button>
  <PipePair left={pipe1.left} height={pipe1.height} gap={pipe1.gap} />
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