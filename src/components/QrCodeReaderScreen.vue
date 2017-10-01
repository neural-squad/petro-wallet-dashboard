<template>
  <b-button type="submit" variant="primary" @click="lauchQrReader">
    Ler Código QR
  </b-button>
</template>

<script>
// Componente para a leitura do código QR gerado no app mobile do consumidor.
// O código carrega um JSON, contendo um identificador único do usuário, e um "vale compras",
// de acordo com o seu saldo na Wallet, no momento que o QRCode foi gerado.

import QRScanner from '../assets/libs/lib-scanner';

export default {
  name: 'QrCodeReaderScreen',

  mounted() {
    this.lauchQrReader();
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

    lauchQrReader() {
      QRScanner.initiate({
        onResult: (result) => { this.sendTransactionToPaymentGateway(result); },
        timeout: 10000000000,
      });
    },
  },
};
</script>

<style scoped>

</style>

