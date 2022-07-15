<template>
  <div class="burger">
    <div class="burger__line-one"></div>
    <div class="burger__line-two"></div>
  </div>
</template>

<script>
export default {
  name: "Burger",
};
</script>

<style lang="scss">
.burger {
  cursor: pointer;
}

.burger__line-one {
  width: 32px;
  height: 2px;
  background-color: #262633;
  border-radius: 10px;
  margin-bottom: 10px;
}

.burger__line-two {
  width: 17px;
  height: 2px;
  background-color: #262633;
  border-radius: 10px;
}
</style>
