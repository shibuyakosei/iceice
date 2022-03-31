<template>
  <div>
    <p>
      トップページ >
      <router-link :to="{ name: 'home' }">商品一覧</router-link> >
      {{ ice[$route.params.id - 1].name }}
    </p>
    <div class="item">
      <img class="ice" v-bind:src="ice[$route.params.id - 1].img_path" />
    </div>
    <div class="item">
      <p>{{ ice[$route.params.id - 1].name }}</p>
    </div>
    <div class="item">
      <p>{{ ice[$route.params.id - 1].price }}</p>
    </div>
    <div class="item">
      <p>{{ ice[$route.params.id - 1].experience }}</p>
    </div>
    <btn
      :btntag="ほしい物リストに追加"
      @click="notificationContent = '商品をほしい物リストに追加しました'"
    >
      ほしい物リストに追加
    </btn>

    <btn
      :btntag="yeah"
      @click="notificationContent = '商品をカートに追加しました'"
    >
    </btn>
    <btnDialog
      :notificationContent="notificationContent"
      @close="notificationContent = ''"
    ></btnDialog>
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
    console.log("a");
    const dialog = ref(false);
    const notificationContent = ref("");
    const yeah = "yeah";
    return {
      dialog,
      ice,
      notificationContent,
      yeah,
    };
  },
  // data: function () {
  //   return {
  //     dialog: false,
  //     ice,
  //   };
  // },
};
</script>
<style>
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
