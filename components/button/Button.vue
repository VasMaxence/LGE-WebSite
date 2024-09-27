<template>
  <button @click="handleClick" :class="className ? 'button ' + className : 'button'">
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  text: {
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
});

const handleClick = () => {
  onClick();
};
</script>
