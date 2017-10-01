<template>
  <b-container>
    <b-row>

      <h1>Exibindo resultado para o identificador:</h1>
      <h2>{{ this.identification }}</h2>

      <b-form @submit="onSubmit">

        <b-form-group id="confirmTransactionInputGroup">

          <!-- Balance -->
          <b-form-input
            id="balance"
            class="balance"
            v-model="balance"
            disabled>
          </b-form-input>

          <!-- Purchase Total -->
          <b-form-input
            id="purchase"
            class="purchase"
            v-model="form.purchase">
          </b-form-input>

          <!-- Remaining Amount -->
          <b-form-input
            id="remainingAmount"
            class="remainingAmount"
            :value="remainingAmount"
            disabled>
          </b-form-input>

        </b-form-group>

        <div id="buttonGroup">
          <b-button
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
        console.log('setBalance OK!');
      });
  },

  computed: {
    balance() {
      return `R$ ${this.$store.getters.balance}`;
    },
    identification() {
      return 'XXX-XXXX' || this.$store.getters.identification;
    },
    remainingAmount() {
      return this.form.balance - this.form.purchase;
    },
  },

  methods: {
    onSubmit() {

    },

    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
#confirmTransactionInputGroup input {
  height: 90px;
  font-size: 55px;
  text-align: center;
}

#buttonGroup button {
  height: 60px;
  width: 40%;
  margin: 3%;
  font-size: 30px;
}
</style>
