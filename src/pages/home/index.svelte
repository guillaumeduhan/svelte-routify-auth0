<script>
  import { logout } from "../../components/Auth.svelte";
  import Button from "../../components/commons/Button.svelte";
  import { userStore } from "../../store";

  let isLoading = false;
  let user;

  userStore.subscribe((x) => {
    user = x;
  });

  function logoutUser() {
    isLoading = true;
    logout();
  }
</script>

<main>
  <p>You are logged in as {user.given_name}.</p>
  <Button on:click={logoutUser} {isLoading} title={"Logout from Auth0"} />
</main>
