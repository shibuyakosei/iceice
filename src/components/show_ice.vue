<template>
  <div class="all">
    <p>
      トップページ >
      <router-link :to="{ name: 'home' }">商品一覧</router-link> >
      {{ ice[$route.params.id - 1].name }}
    </p>

    <img class="iceImg" v-bind:src="ice[$route.params.id - 1].img_path" />
    <div class="otherThanImages">
      <p class="iceName">{{ ice[$route.params.id - 1].name }}</p>

      <p class="icePrice">{{ ice[$route.params.id - 1].price }}</p>

      <p class="iceExplanation">{{ ice[$route.params.id - 1].explanation }}</p>

      <btn @click="notificationContent = '商品をほしい物リストに追加しました'">
        ほしい物リストに追加
      </btn>

      <btn
        @click="notificationContent = '商品をカートに追加しました'"
        class="yellowgreen"
      >
        カートに追加
      </btn>

      <btnDialog
        :notificationContent="notificationContent"
        @close="notificationContent = ''"
      ></btnDialog>
    </div>
  </div>
</template>

<script>
import { ice } from "../data/ice.js";
import { ref } from "vue";
import btnDialog from "./dialog.vue";
import btn from "./btn.vue";
export default {
  components: { btnDialog, btn },
  setup() {
    const dialog = ref(false);
    const notificationContent = ref("");
    return {
      dialog,
      ice,
      notificationContent,
    };
  },
};
</script>
<style scoped>
.all {
  margin: 75px;
  color: dimgray;
}

.iceImg {
  width: 30%;
  height: 30%;
  margin: 12px 0;
  -o-object-fit: cover;
  object-fit: cover;
}
.otherThanImages {
  position: relative;
  bottom: 425px;
  left: 550px;
}

.iceName {
  font-size: 30px;
}

.icePrice {
  color: #ff0066;
}

.iceExplanation {
  white-space: pre-wrap;
}

.btnDialog {
  padding: 50px;
  background-color: white;
}
</style>
