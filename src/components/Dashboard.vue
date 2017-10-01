<template>
  <b-container>
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
