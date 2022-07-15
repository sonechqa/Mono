<template>
  <button class="button">ОСТАВИТЬ ЗАЯВКУ</button>
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
    background-color: #ca3e4e;
  }

  @media screen and (max-width: 1030px) {
    display: none;
  }
}
</style>
