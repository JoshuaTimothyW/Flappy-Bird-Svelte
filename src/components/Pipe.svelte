<script>
    import { first_pipe, frame } from "../store";

</script>

{#if $first_pipe.show }
    <section
        style="left: {$first_pipe.left}px; top: {0}px; width: {$first_pipe.width}px; height: {$first_pipe.height}px;"
        class="pipe"
    >
    </section>
    <section
        style="left: {$first_pipe.left}px; top: {$first_pipe.height+150}px; width: {$first_pipe.width}px; height: {$frame.max_top}px;"
        class="bottom"
    >
    </section>
{/if}

<style>
    .pipe {
        position: absolute;
        background-color: palegreen;
    }
    .bottom {
        position: absolute;
        background-color: red;
    }
</style>