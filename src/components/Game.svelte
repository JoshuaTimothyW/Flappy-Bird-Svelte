<script>
    import { frame } from "../store";
    import Pipe from "./Pipe.svelte";

    let pipe_width = 400;
    let pipe_height = 100;
    let pipe_left = frame.width-pipe_width;

    function random() {
      // return (
      // this.minTopForTopPipe +
      //   (this.maxTopForTopPipe - this.minTopForTopPipe) * Math.random()
      // );
    }

</script>

<main class="game">
  <Pipe height={pipe_height} width={pipe_width} left={pipe_left} top={0} />
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