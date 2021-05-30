<script>
  import { loginWithPopup } from "../../components/Auth.svelte";
  import Button from "../../components/commons/Button.svelte";

  let isLoading = false;

  function login() {
    isLoading = true;
    loginWithPopup();
  }
</script>

<main class="my-16">
  <div
    class="Login flex flex-col items-center justify-center mx-auto"
    style="max-width: 300px"
  >
    <h1>Welcome please login.</h1>
    <Button on:click={login} {isLoading} title={"Login with Auth0"} />
  </div>
</main>
