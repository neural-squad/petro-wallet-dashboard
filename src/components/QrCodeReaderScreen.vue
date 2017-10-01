<template>

</template>

<script>
import QRScanner from '../assets/libs/lib-scanner';

export default {
  name: 'QrCodeReaderScreen',

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
  },
};
</script>

<style scoped>

</style>

