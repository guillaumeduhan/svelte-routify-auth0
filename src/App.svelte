<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
  import { isAuthenticated } from "./store";
  import Login from "./pages/login/index.svelte";
  import Auth from "./components/Auth.svelte";

  let isLoggedIn = false;

  isAuthenticated.subscribe((v) => {
    isLoggedIn = v;
  });
</script>

<div>
  <Auth />
  {#if isLoggedIn}
    <Router {routes} />
  {:else}
    <Login />
  {/if}
</div>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
