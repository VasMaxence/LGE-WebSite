<template>
  <div class="px-3">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  className: {
    type: String,
    required: false,
  },
});
</script>
