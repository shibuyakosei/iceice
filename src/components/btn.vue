<template>
  <button>{{ btntag }}</button>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    btntag: {
      type: String,
      default: "default",
    },
  },
});
</script>
