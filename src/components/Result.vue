<template>
  <b-container>
    <b-row>

      <h1>Exibindo resultado para o identificador:</h1>
      <h2>{{ this.identification }}</h2>

      <b-form id="balanceconfirmTransactionForm" @submit="onSubmit">

        <b-form-group>
          <!-- Purchase Total -->
          <b-form-input
            id="purchase"
            class="purchase"
            v-model="form.purchase">
          </b-form-input>
        </b-form-group>

        <div id="buttonGroup">
          <b-button
            id="submitButton"
            type="submit"
            variant="primary">
              Confirmar
          </b-button>
          <b-button
            variant="secondary"
            @click="back">
              Cancelar
          </b-button>
        </div>

      </b-form>

    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Result',

  components: {},

  data() {
    return {
      form: {
        balance: '',
        purchase: '0',
        remainingAmount: '0',
      },
    };
  },

  created() {
    this.$store
      .dispatch('setBalance', '100')
      .then(() => {
        this.form.balance = this.$store.getters.balance;
        // console.log('setBalance OK!');
      });
  },

  computed: {
    balance() {
      return `R$ ${this.$store.getters.balance}`;
    },
    identification() {
      return 'XXX-XXXX' || this.$store.getters.identification;
    },
    remainingAmountRS() {
      this.form.remainingAmount = this.form.balance - this.form.purchase;
      return `R$ ${this.form.remainingAmount}`;
    },
    remainingAmount() {
      return this.form.remainingAmount;
    },
  },

  watch: {
    remainingAmount() {
      if (this.remainingAmount < 0) {
        document.getElementById('submitButton').disabled = true;
      } else {
        document.getElementById('submitButton').disabled = false;
      }
    },
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$store.dispatch('makeAPurchase', { purchase: this.form.purchase, cpf: this.$store.getters.cpf })
        .then(() => {
          this.$router.go(-1);
        })
        .catch((err) => {
          this.showError(err.message);
        });
    },

    showError(message) {
      this.$root.$children[0].$refs.notification.error(message, 'Erro!');
    },

    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
#balanceconfirmTransactionForm input {
  height: 90px;
  font-size: 2.5em;
  text-align: center;
}

#buttonGroup button {
  height: 60px;
  width: 40%;
  margin: 3%;
  font-size: 30px;
}
</style>
