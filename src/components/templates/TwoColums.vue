<template>
  <section class="page_root">
    <div class="top">
      <slot name="top" />
    </div>

    <div class="left">
      <slot name="left" />
    </div>

    <div class="right">
      <slot name="right" />
    </div>
  </section>
</template>

<style scoped>
.page_root {
  padding: 0 50px;
  margin: 2rem auto;
  display: flex;
  flex-wrap: wrap;
}

.top {
  width: 100%;
}

.left {
  width: 40%;
  padding: 20px;
}

.right {
  width: 60%;
  padding: 20px;
}


</style>