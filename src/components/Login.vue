<template>
  <b-container>
    <b-row>

      <div id="errorMessageWrapper" style="display: none;">
        <b-alert show dismissible variant="danger">{{ errorMessage }}</b-alert>
      </div>

      <b-form @submit="onSubmit">

        <b-form-group id="cnpjInputGroup">
          <the-mask
            id="cnpjInput"
            class="credentialInput form-control"
            v-model="form.username"
            required
            mask="##.###.###/####-##"
            placeholder="CNPJ">
          </the-mask>
        </b-form-group>

        <b-form-group id="passwordInputGroup">
          <b-form-input
            id="passwordInput"
            class="credentialInput"
            type="password"
            v-model="form.password"
            required
            placeholder="PIN">
          </b-form-input>
        </b-form-group>

        <div id="buttonGroup">
          <b-button
            type="submit"
            variant="primary">
              Entrar
          </b-button>
          <b-button
            type="reset"
            variant="secondary">
              Limpar
          </b-button>
        </div>
      </b-form>
    </b-row>
  </b-container>
</template>

<script>
import PetroWalletHeader from '@/components/PetroWalletHeader';
import { TheMask } from 'vue-the-mask';

export default {
  name: 'Login',

  components: { PetroWalletHeader, TheMask },

  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      errorMessage: null,
    };
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$store.dispatch('login', this.form)
        .then(() => {
          this.$router.push('/dashboard');
        })
        .catch((err) => {
          this.showError(err);
        });
    },

    showError(message) {
      this.errorMessage = message;
      document.getElementById('errorMessageWrapper').style.display = 'block';
    },
  },

};
</script>

<style scoped>
.credentialInput {
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
