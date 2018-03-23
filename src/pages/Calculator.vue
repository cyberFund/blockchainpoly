<template>
  <div id="calculator">
    <table>
      <tr>
        <td>GBG</td>
        <td><input type="number" v-model="form.gbg"></td>
        <td>x {{ rates.gbg }}</td>
      </tr>
      <tr>
        <td>BTC</td>
        <td><input type="number" v-model="form.btc"></td>
        <td>x {{ rates.btc }}</td>
      </tr>
      <tr>
        <td>ETH</td>
        <td><input type="number" v-model="form.eth"></td>
        <td>x {{ rates.eth }}</td>
      </tr>
      <tr>
        <td>ICO #1</td>
        <td><input type="number" v-model="form.ico1"></td>
        <td>x {{ rates.ico1 }}</td>
      </tr>
      <tr>
        <td>ICO #2</td>
        <td><input type="number" v-model="form.ico2"></td>
        <td>x {{ rates.ico2 }}</td>
      </tr>
      <tr>
        <td>ICO #3</td>
        <td><input type="number" v-model="form.ico3"></td>
        <td>x {{ rates.ico3 }}</td>
      </tr>
      <tr>
        <td>ICO #4</td>
        <td><input type="number" v-model="form.ico4"></td>
        <td>x {{ rates.ico4 }}</td>
      </tr>
    </table>

    <div class="total">TOTAL: {{ total }}</div>

    <div class="controls">
      <button @click="calculate">Calculate</button>
      <button @click="reset">Reset</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'calculator',
    data() {
      return {
        form: {},
        rates: {},
        total: 0,
      };
    },
    mounted() {
      if (localStorage.getItem('rates')) {
        this.rates = JSON.parse(localStorage.getItem('rates')).pop();
      }
    },
    methods: {
      reset() {
        this.form = {};
        this.total = 0;
      },
      calculate() {
        this.total = 0;
        this.total += this.form.gbg * this.rates.gbg || 0;
        this.total += this.form.btc * this.rates.btc || 0;
        this.total += this.form.eth * this.rates.eth || 0;
        this.total += this.form.ico1 * this.rates.ico1 || 0;
        this.total += this.form.ico2 * this.rates.ico2 || 0;
        this.total += this.form.ico3 * this.rates.ico3 || 0;
        this.total += this.form.ico4 * this.rates.ico4 || 0;
      },
    },
  };
</script>

<style scoped>
  .total {
    text-align: center;
    font-size: x-large;
    margin-top: 10px;
  }
</style>
