<template>
  <div id="exchange-rates">
    <h1>BLOCKCHAINPOLY EXCHANGE RATES</h1>

    <table>
      <thead>
      <tr>
        <th>GBG</th>
        <th>BITCOIN</th>
        <th>ETHEREUM</th>
        <th>ICO #1</th>
        <th>ICO #2</th>
        <th>ICO #3</th>
        <th>ICO #4</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="rate in rates">
        <td>{{ rate.gbg }}</td>
        <td>{{ rate.btc }}</td>
        <td>{{ rate.eth }}</td>
        <td>{{ rate.ico1 }}</td>
        <td>{{ rate.ico2 }}</td>
        <td>{{ rate.ico3 }}</td>
        <td>{{ rate.ico4 }}</td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <td><input type="number" v-model="form.gbg"></td>
        <td><input type="number" v-model="form.btc"></td>
        <td><input type="number" v-model="form.eth"></td>
        <td><input type="number" v-model="form.ico1"></td>
        <td><input type="number" v-model="form.ico2"></td>
        <td><input type="number" v-model="form.ico3"></td>
        <td><input type="number" v-model="form.ico4"></td>
      </tr>
      </tfoot>
    </table>

    <div class="controls">
      <button @click="submit">Save</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'exchangeRates',
    data() {
      return {
        form: {},
        rates: [
          {
            gbg: 1,
            btc: 300000,
            eth: 15000,
          },
        ],
      };
    },
    methods: {
      submit() {
        this.rates.push({
          gbg: this.add('gbg'),
          btc: this.add('btc'),
          eth: this.add('eth'),
          ico1: this.add('ico1'),
          ico2: this.add('ico2'),
          ico3: this.add('ico3'),
          ico4: this.add('ico4'),
        });
        this.form = {};
      },
      add(name) {
        const last = this.rates[this.rates.length - 1];
        let value = last[name];

        if (this.form[name]) {
          if (value) {
            value += last[name] * (this.form[name] / 100);
          } else {
            value = parseInt(this.form[name], 10);
          }
        }

        if (value) value = Math.round(value * 100) / 100;

        return value;
      },
    },
  };
</script>

<style scoped>
  h1 {
    text-align: center;
  }

  .controls {
    text-align: center;
    margin-top: 10px;
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
