<script>
    export let height;
    export let gap;
    export let show=true;
    export let left;
    export let width=50;

</script>

{#if show }
    <section
        style="left: {left}px; top: {0}px; width: {width}px; height: {height}px;"
        class="pipe"
    >
    {left}
    </section>
    <section
        style="left: {left}px; top: {height+gap}px; width: {width}px; height: {400}px;"
        class="bottom"
    >
    {left}
    </section>
{/if}

<style>
    .pipe {
        position: absolute;
        background-color: palegreen;
    }
    .bottom {
        position: absolute;
        background-color: lightcoral;
    }
</style>