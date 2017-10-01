<template>
  <b-container>
    <b-row>
      <h1 style="padding-bottom: 50px;">Leia o código QR do consumidor!</h1>
    </b-row>
    <b-row>
      <qr-code-reader-screen></qr-code-reader-screen>
    </b-row>
  </b-container>
</template>

<script>
import QrCodeReaderScreen from './QrCodeReaderScreen';

export default {
  name: 'Dashboard',

  components: { QrCodeReaderScreen },
};
</script>

<style scoped>

</style>
