<div id="loading" class="border-4 border-primary-500" />

<style>
  #loading {
    display: inline-block;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border-top-color: rgb(233, 233, 233);
    border-left-color: rgb(233, 233, 233);
    border-right-color: rgb(233, 233, 233);
    animation: spin 750ms ease-in-out infinite;
    -webkit-animation: spin 750ms ease-in-out infinite;
  }

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
</style>
