<template>
  <b-container>
    <b-row>
      <petro-wallet-header></petro-wallet-header>
      <smart-input></smart-input>
    </b-row>
  </b-container>
</template>

<script>
import PetroWalletHeader from '@/components/PetroWalletHeader';
import SmartInput from './SmartInput';

export default {
  name: 'Dashboard',

  components: { SmartInput, PetroWalletHeader },

  data() {
    return {

    };
  },
};
</script>

<style scoped>

</style>
