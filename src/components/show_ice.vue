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
    <button @click="dialog = 'wantList'">ほしい物リストに追加</button>
    <div v-if="dialog === 'wantList'" id="overlay">
      <div class="btnDialog">
        <div>商品をほしい物リストに追加しました</div>
        <btn @click="dialog = false">閉じる</btn>
      </div>
    </div>
    <button @click="dialog = 'cart'">カートに入れる</button>
    <div v-if="dialog === 'cart'" id="overlay">
      <div class="btnDialog">
        <div>商品をカートに追加しました</div>
        <btn @click="dialog = false">閉じる</btn>
      </div>
    </div>
  </div>
</template>

<script>
import { ice } from "../data/ice.js";
import { ref } from "vue";
export default {
  setup() {
    console.log("a");
    const dialog = ref(false);
    return {
      dialog,
      ice,
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
