<script>
    export let left;
    export let top;
    export let size;
</script>

<section class="bird" style="width: {size}px; height: {size}px; top: {top}px; left: {left}px"></section>

<style>
    .bird{
        border: solid black 1px;
        background-color: yellow;
        position: absolute;
    }
</style>