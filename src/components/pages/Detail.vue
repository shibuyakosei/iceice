<script setup>
// 旧 show_ice.vue

import { ref } from "vue";
import iceData from "../../data/ice.js";
import btnDialog from "../dialog.vue";
import btn from "../btn.vue";
import TwoColumns from '../templates/TwoColums.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = ref(Number(route.params.id))
const [data] = iceData.filter((item) => item.id === id.value)

const notificationContent = ref('')
</script>

<template>
  <TwoColumns>
    <template #top>
      <p>
        トップページ >
        <router-link :to="{ name: 'home' }">商品一覧</router-link> >
        {{ data.name }}
      </p>
    </template>

    <template #left>
      <img class="img" v-bind:src="data.img_path" />
    </template>

    <template #right>
      <h1 v-text="data.name" />
      <p class="price color__price" v-text="data.price" />
      <p class="description" v-text="data.description" />

      <ul class="btns">
        <li>
          <btn @click="notificationContent = '商品をほしい物リストに追加しました'" v-text="'ほしい物リストに追加'" />
        </li>
        <li>
          <btn
            @click="notificationContent = '商品をカートに追加しました'"
            class="yellowgreen"
            v-text="'カートに追加'"
          />
        </li>
      </ul>


      <btnDialog
        :notificationContent="notificationContent"
        @close="notificationContent = ''"
      />
    </template>
  </TwoColumns>
</template>

<style scoped>
.price {
  font-size: 1.8rem;
}

.description {
  margin-top: 1rem;
  white-space: pre-line;
}

.btns {
  margin-top: 1rem;
  display: flex;
  width: 320px;
  justify-content: space-evenly;
}

.btnDialog {
  padding: 50px;
  background-color: white;
}
</style>
