<template>
  <div id="app">
    <petro-wallet-header></petro-wallet-header>
    <router-view></router-view>
    <notification ref='notification'></notification>
  </div>
</template>

<script>
import Notification from '@/components/Notification';
import PetroWalletHeader from '@/components/PetroWalletHeader';

export default {
  name: 'app',

  components: { Notification, PetroWalletHeader },
};
</script>

<style>
body, html {
  background-color: #fff;
}

#app {
  font-family: PetrobrasSans_Rg;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
