<template>
  <div class="loisir06-form-field w-full">
    <h5 class="loisir06-form-input-title">
      {{ fieldName }}
    </h5>
    <input v-if="!multiline" type="text" :placeholder="placeholder" v-model="inputValue" @input="$emit('input', inputValue)" class="loisir06-form-input" />
    <textarea v-else :rows="rows" :placeholder="placeholder" v-model="inputValue" @input="$emit('input', inputValue)" class="loisir06-form-input"></textarea>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    fieldName: {
      type: String,
      default: "",
    },
    multiline: {
      type: Boolean,
      default: false,
    },
    rows: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      inputValue: "",
    };
  },
};
</script>
