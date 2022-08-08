<template>
  <button class="uiButton" :disabled="disabled"><slot></slot></button>
</template>

<script>
export default {
  name: "UiButton",

  props: {
    disabled: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss">
.uiButton {
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
  transition: background-color ease 0.3s;

  &:hover {
    background-color: #cc2a3c;
  }
}
</style>
