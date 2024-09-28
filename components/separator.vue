<template>
  <div :class="className ? 'w-full flex flex-row items-center separator ' + className : 'w-full flex flex-row items-center separator'">
    <img src="@/static/images/line-left.png" alt="separator-left" class="w-1/4" />
    <div class="w-1/2 flex items-center justify-center">
      <slot />
    </div>
    <img src="@/static/images/line-right.png" alt="separator-right" class="w-1/4" />
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
