// plugins/toast.js
import Vue from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

export default ({ app }, inject) => {
  if (process.client) {
    Vue.use(Toast, {
      // options par défaut pour les toasts
      transition: "Vue-Toastification__fade",
      position: "top-right",
      timeout: 5000,
      closeOnClick: true,
      pauseOnFocusLoss: false,
      pauseOnHover: false,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: false,
      hideProgressBar: false,
      closeButton: "button",
      icon: true,
      rtl: false,
      maxToasts: 5,
      newestOnTop: true,
    });
  }
};
