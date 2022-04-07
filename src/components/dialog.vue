<template>
  <div v-if="notificationContent !== ''" id="overlay">
    <div class="btnDialog">
      <p>{{ notificationContent }}</p>
      <btn @click="$emit('close')" class="emeraldgreen close">閉じる</btn>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import btn from "./btn.vue";
export default defineComponent({
  components: { btn },
  props: {
    notificationContent: {
      type: String,
      default: "",
    },
  },
});
</script>

<style scoped>
#overlay {
  /*要素を重ねた時の順番*/
  z-index: 1;

  /*画面全体を覆う設定*/
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  /*画面の中央に要素を表示させる設定*/
  display: flex;
  align-items: center;
  justify-content: center;
}
.btnDialog {
  padding: 50px;
  background-color: white;
}
</style>
