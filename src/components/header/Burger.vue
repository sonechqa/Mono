<template>
  <div class="burger">
    <div class="line-one"></div>
    <div class="line-two"></div>
  </div>
</template>

<script>
export default {
  name: "Burger",
};
</script>

<style lang="scss">
.line-one {
  width: 32px;
  height: 2px;
  background-color: #262633;
  border-radius: 10px;
  margin-bottom: 10px;
}

.line-two {
  width: 17px;
  height: 2px;
  background-color: #262633;
  border-radius: 10px;
}
</style>
