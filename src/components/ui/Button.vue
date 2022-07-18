<template>
  <button class="button"><slot></slot></button>
</template>

<script>
export default {
  name: "Button",
};
</script>

<style lang="scss">
.button {
  background-color: #bf2738;
  border: none;
  border-radius: 14px;
  padding: 19px 28px;
  color: #ffffff;
  font-family: "RoadRadio";
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  cursor: pointer;

  &:hover {
    background-color: #cc2a3c;
  }
}
</style>
