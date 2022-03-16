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
    <button>ほしい物リストに追加</button>
    <button>カートに入れる</button>
  </div>
</template>

<script>
import { ice } from "../data/ice.js";

export default {
  data: function () {
    return {
      ice,
    };
  },
};
</script>
