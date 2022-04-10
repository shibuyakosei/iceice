<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script></script>
<style>
.button {
  padding: 10px;
  margin-right: 20px;
  width: 160px;
  border-radius: 10px;
}
button.yellowgreen {
  background-color: #00ff00;
  color: white;
  border: none;
}
button.emeraldgreen {
  background-color: #93ffab;
  color: white;
  border: none;
}
button.close {
  width: 60px;
  margin: auto 36%;
}
</style>
