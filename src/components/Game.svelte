<script>
    import { frame } from "../store";
    import Pipe from "./Pipe.svelte";
</script>

<main class="game">
    <Pipe />
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