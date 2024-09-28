<template>
  <div :class="className ? 'white-card w-full ' + className : 'white-card w-full px-8 py-5 rounded-xl flex flex-row gap-x-4'">
    <div class="flex-1 flex flex-col">
      <h1 class="card-body leading-7">{{ title }}</h1>
      <h2 class="card-subtitle leading-7">{{ subtitle }}</h2>
    </div>
    <Button text="Réserver" :onClick="onClick" :className="'px-6 ' + buttonClassName" />
  </div>
</template>

<script setup>
import Button from "@/components/button/Button.vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  onClick: {
    type: Function,
    required: true,
  },
  className: {
    type: String,
    required: false,
  },
  buttonClassName: {
    type: String,
    required: false,
  },
});
</script>
