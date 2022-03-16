<template>
  <div>
    <h1>商品一覧</h1>
    <p>トップページ > 商品一覧</p>
    <ul class="container">
      <li class="item" v-for="value in ice" v-bind:key="value.name">
        <router-link :to="{ name: 'show_ice', params: { id: value.id } }">
          <div class="item">
            <img class="ice" v-bind:src="value.img_path" />
            <!-- <img class="ice" v-bind:src="img" /> -->
          </div>
          <div class="item">
            <p>{{ value.name }}</p>
          </div>
          <div class="item">
            <p>{{ value.price }}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { ice } from "../data/ice.js";

export default {
  data: function () {
    return {
      img: require("../../public/img/mikan.png"),
      // // name,
      // price,
      ice,
    };
  },
};
console.log(ice);
</script>

<style>
.all {
  max-width: 200px;
  border: 1px solid;
}
img.ice {
  width: 50%;
  height: 50%;
  margin: 12px;
  -o-object-fit: cover;
  object-fit: cover;
}

.item {
  display: inline;
}

ul.container {
  display: grid;
  grid-template-columns: repeat(5, 250px);
  gap: 20px;
}
</style>
