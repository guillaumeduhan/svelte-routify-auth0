<script>
  import Button from "smelte/src/components/Button";
  import Loading from "../commons/Loading.svelte";

  export let title;
  export let isLoading;
</script>

<div class="my-8" on:click>
  {#if isLoading}
    <Loading />
  {:else}
    <Button primary>{title}</Button>
  {/if}
</div>
