<template>
  <div :class="className ? 'px-12 py-8 w-full rounded-3xl bg-white-low border-low-white border border-[0.5px] backdrop-blur-2xl ' + className : 'px-12 py-8 w-full rounded-3xl bg-white-low border-low-white border border-[0.5px] backdrop-blur-2xl'">
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
