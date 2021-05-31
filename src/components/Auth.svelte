<script context="module">
  import createAuth0Client from "@auth0/auth0-spa-js";
  import { userStore, isAuthenticated } from "../store";
  import config from "../../auth.config";

  let client;

  async function createClient() {
    client = await createAuth0Client({
      domain: config.domain,
      client_id: config.clientId,
    });
  }

  createClient().then(() => {
    isAuth();
  });

  function isAuth() {
    client.isAuthenticated().then((isAuth) => {
      getUser();
    });
  }

  function getUser() {
    const user = client.getUser();

    user
      .then((userData) => {
        userStore.set(userData);
        if (userData) {
          isAuthenticated.set(true);
        }
      })
      .catch((err) => {
        return err;
      });
  }

  function loginWithPopup() {
    client
      .loginWithPopup()
      .then(() => {
        getUser();
      })
      .catch((err) => {
        return err;
      });
  }

  function logout() {
    return client.logout();
  }

  export { loginWithPopup, logout };
</script>
