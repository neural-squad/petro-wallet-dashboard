<template>
  <b-container>
    <b-row>
      <b-form @submit="onSubmit">

        <b-form-group id="smartInputGroup">
          <b-form-input
            id="smartInput"
            class="smartInput form-control"
            v-model="form.inputValue"
            required
            placeholder="Busque uma placa ou CPF">
          </b-form-input>
        </b-form-group>


        <video id="preview"></video>

        <b-button
          type="submit"
          style="display: none;">
        </b-button>

      </b-form>
    </b-row>
  </b-container>
</template>

<script>
import QRScanner from '../assets/libs/lib-scanner.js';
// import store from '../vuex/store';

export default {
  name: 'SmartInput',

  data() {
    return {
      form: {
        inputValue: '',
      },
      isCpfInput: null,
    };
  },

  computed: {
    inputMask() {
      return this.form.inputValue;
    },
  },

  mounted() {
    QRScanner.initiate({
      onResult: (result) => { this.sendTransactionToPaymentGateway(result); },
      timeout: 100000000,
    });
  },

  methods: {
    sendTransactionToPaymentGateway(result) {
      const transaction = JSON.parse(result);

      this.$root.$children[0].$refs.notification.info('Processando transação!', 'Espere um momento!');
      this.$store.dispatch('sendTransactionToPaymentGateway', result);

      // Simulando operação assíncrona no gateway de pagamentos
      setTimeout(() => {
        this.$root.$children[0].$refs.notification.success(`Transação concluída com o valor de R$ ${transaction.saldo}`, 'Sucesso!');
      }, 1500);
    },

    isCpf(inputValue) {
      if (isNaN(inputValue)) {
        return false;
      }
      return true;
    },

    maskInputAsCpf() {
      document.getElementById('smartInput').maxLength = 11;
    },

    maskInputAsCarPlate() {
      document.getElementById('smartInput').maxLength = 7;
    },

    onSubmit() {
      this.$store
        .dispatch('setIdentification', this.form.inputValue)
        .then(() => {
          this.$router.push({ path: '/result' });
          this.$root.$children[0].$refs.notification.success('Dados encontrados!', 'Sucesso!');
        })
        .catch((err) => {
          this.$root.$children[0].$refs.notification.error(err.message, 'Erro!');
        });
    },
  },

  watch: {
    inputMask() {
      //  ? '###.###.###-##' : 'AAA-####';
      if (this.isCpf(this.form.inputValue)) {
        this.maskInputAsCpf();
      } else {
        this.maskInputAsCarPlate();
      }
    },
  },
};
</script>

<style scoped>
.smartInput {
  height: 90px;
  font-size: 2.5em;
  text-align: center;
}
</style>

