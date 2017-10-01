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

        <b-button
          type="submit"
          style="display: none;">
        </b-button>

      </b-form>
    </b-row>
  </b-container>
</template>

<script>

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

  methods: {
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
        .then((res) => {
          this.$router.push({ path: '/result' });
          this.$root.$children[0].$refs.notification.success(`Dados encontrados! ${res}`, 'Sucesso!');
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

