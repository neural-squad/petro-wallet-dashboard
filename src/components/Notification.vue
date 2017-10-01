<template>

</template>

<script>
import toastr from 'toastr';

export default {
  name: 'Notification',

  data() {
    return {
      toastr,
      options: {
        closeButton: true,
        debug: false,
        newestOnTop: true,
        progressBar: true,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
        onclick: null,
        showDuration: '300',
        hideDuration: '1000',
        timeOut: '5000',
        extendedTimeOut: '2000',
        showEasing: 'swing',
        hideEasing: 'linear',
        showMethod: 'fadeIn',
        hideMethod: 'fadeOut',
      },
    };
  },

  created() {
    this.toastr.options = this.options;
  },

  methods: {
    remove() {
      this.toastr.remove();
    },
    clear() {
      this.toastr.clear();
    },
    success(message, title) {
      this.toastr.success(message, title);
    },
    info(message, title) {
      this.toastr.info(message, title);
    },
    warning(message, title) {
      this.toastr.warning(message, title);
    },
    error(message, title) {
      this.toastr.error(message, title);
    },
  },
};
</script>

<style>
#toast-container>.toast-success {
  background-color: #72b372;
}

#toast-container>.toast-info {
  background-color: #56a9c1;
}

#toast-container>.toast-warning {
  background-color: #f7ae45;
}

#toast-container>.toast-error {
  background-color: #c65b55;
}

#toast-container>div {
  opacity: 0.95 !important;
  padding: 20px 20px 20px 55px !important;
}

.toast-close-button {
  top: -0.6em !important;
}
</style>
