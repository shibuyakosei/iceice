<template>
  <div>
    <ul class="container">
      <li class="item" v-for="value in ice" v-bind:key="value.name">
        <div class="item">
          <!-- <img class="ice" v-bind:src="value.img_path" /> -->
          <img class="ice" v-bind:src="img" />
        </div>
        <div class="item">
          <p>{{ value.name }}</p>
        </div>
        <div class="item">
          <p>{{ value.price }}</p>
        </div>
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

// for (const item of ice) {
//   ice.img_path = require(item.img_path);
//   console.log(ice.img_path);
// }
</script>

<style>
.all {
  max-width: 200px;
  border: 1px solid;
}
img.ice {
  width: 20%;
  height: 20%;
  margin: 12px;
  -o-object-fit: cover;
  object-fit: cover;
}

li {
  display: inline;
}

ul.container {
  display: grid;
  grid-template-columns: repeat(5, 180px);
  gap: 20px;
}
</style>
