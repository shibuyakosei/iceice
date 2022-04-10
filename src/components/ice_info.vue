<template>
  <div class="all">
    <h1 class="text">商品一覧</h1>
    <p class="text">トップページ > 商品一覧</p>
    <ul class="container">
      <li class="items" v-for="value in ice" v-bind:key="value.name">
        <router-link :to="{ name: 'show_ice', params: { id: value.id } }">
          <div class="item">
            <img class="iceImg" v-bind:src="value.img_path" />
            <p class="itemText">{{ value.name }}</p>
            <p class="itemText itemPrice">{{ value.price }}</p>
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
      ice,
    };
  },
};
</script>

<style scoped>
.all {
  margin: 30px;
  color: dimgray;
}
.text {
  margin-left: 40px;
}
img.iceImg {
  width: 50%;
  height: 50%;
  margin: 12px 50px;
}

.items {
  display: inline;
  text-decoration: none;
}

a {
  text-decoration: none;
  color: gray;
}

.item {
  border: solid 1px;
  width: 200px;
  height: 250px;
  border-radius: 10px;
}

.itemText {
  margin: 12px;
}

.itemPrice {
  color: #ff0066;
}

ul.container {
  display: grid;
  grid-template-columns: repeat(5, 250px);
  gap: 20px;
}
</style>
