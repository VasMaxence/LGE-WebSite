<template>
  <button @click="handleClick" :class="className ? 'rounded-lg flex items-center justify-center py-2 h-[50px] ' + className : 'rounded-lg flex items-center justify-center py-2 h-[50px]'">
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
