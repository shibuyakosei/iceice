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

      <btn
        :btntag="ほしい物リストに追加"
        @click="notificationContent = '商品をほしい物リストに追加しました'"
      >
      </btn>

      <btn
        :btntag="カートに追加"
        @click="notificationContent = '商品をカートに追加しました'"
      >
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
<style scoped>
.all {
  margin: 75px;
  color: dimgray;
}
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

.btnDialog {
  padding: 50px;
  background-color: white;
}
</style>
