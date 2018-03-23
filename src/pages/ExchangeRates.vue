<template>
  <div id="exchange-rates">
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
      <button @click="add">Add</button>
      <button @click="undo">Undo</button>
      <button @click="reset">Reset</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'exchangeRates',
    data() {
      return {
        form: {},
        rates: [],
      };
    },
    mounted() {
      if (localStorage.getItem('rates')) {
        this.rates = JSON.parse(localStorage.getItem('rates'));
      } else {
        this.setDefault();
      }
    },
    methods: {
      reset() {
        /* eslint-disable no-alert */
        if (!confirm('Are you sure?')) return;

        this.setDefault();
      },
      setDefault() {
        this.rates = [
          {
            gbg: 1,
            btc: 300000,
            eth: 15000,
          },
        ];

        this.save();
      },
      undo() {
        /* eslint-disable no-alert */
        if (!confirm('Are you sure?')) return;

        this.rates.splice(-1, 1);
        this.save();
      },
      add() {
        this.rates.push({
          gbg: this.calc('gbg'),
          btc: this.calc('btc'),
          eth: this.calc('eth'),
          ico1: this.calc('ico1'),
          ico2: this.calc('ico2'),
          ico3: this.calc('ico3'),
          ico4: this.calc('ico4'),
        });

        this.save();
        this.form = {};
      },
      calc(name) {
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
      save() {
        localStorage.setItem('rates', JSON.stringify(this.rates));
      },
    },
  };
</script>
