<script>
  import Auth from "../components/Auth.svelte";
  import Login from "./login/index.svelte";
  import Home from "./home/index.svelte";
  import { isAuthenticated } from "../store";

  let isLoggedIn = false;

  isAuthenticated.subscribe((v) => {
    isLoggedIn = v;
  });
</script>

<main>
  <Auth />
  {#if isLoggedIn}
    <Home />
  {:else}
    <Login />
  {/if}
</main>
