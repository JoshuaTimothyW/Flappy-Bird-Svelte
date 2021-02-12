<script>
    export let height;
    export let gap;
    export let show;
    export let left;
    export let width;
</script>

{#if show }
    <section
        style="left: {left}px; top: {0}px; width: {width}px; height: {height}px;"
        class="pipe"
    >
    </section>
    <section
        style="left: {left}px; top: {height+gap}px; width: {width}px; height: {400}px;"
        class="pipe"
    >
    </section>
{/if}

<style>
    .pipe {
        position: absolute;
        background-color: palegreen;
    }
</style>