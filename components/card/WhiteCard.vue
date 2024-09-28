<template>
  <div
    :class="
      className
        ? (addDefaultPx ? 'px-8' : '') + ' py-8 rounded-3xl bg-white-low border-low-white border border-[0.5px] backdrop-blur-2xl ' + className
        : (addDefaultPx ? 'px-8' : '') + ' py-8 rounded-3xl bg-white-low border-low-white border border-[0.5px] backdrop-blur-2xl'
    "
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  className: {
    type: String,
    required: false,
  },
  addDefaultPx: {
    type: Boolean,
    required: false,
    default: true,
  },
});
</script>
