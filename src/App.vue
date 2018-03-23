<template>
  <div id="app">
    <nav>
      <router-link :to="{ name: 'exchangeRates' }">EXCHANGE RATES</router-link>
      <router-link :to="{ name: 'calculator' }">CALCULATOR</router-link>
      <router-link :to="{ name: 'rules' }">RULES</router-link>
      <router-link :to="{ name: 'field' }">FIELD</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'blockchainpoly',
  };
</script>

<style scoped>
  nav {
    font-size: x-large;
    text-align: center;
    margin-bottom: 50px;
  }

  nav a {
    text-decoration: none;
    color: black;
    margin: 0 10px;
  }

  nav a.router-link-active {
    text-decoration: underline;
  }
</style>

<style>
  .controls {
    text-align: center;
    margin-top: 30px;
  }

  .controls button {
    font-size: x-large;
  }

  table {
    margin-left: auto;
    margin-right: auto;
    border-collapse: collapse;
    font-size: x-large;
  }

  table, th, td {
    border: 3px solid black;
  }

  th, td {
    padding: 5px;
  }
</style>
