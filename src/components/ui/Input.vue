<template>
  <input type="text" :placeholder="placeholder" />
</template>

<script>
export default {
  name: "Input",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
input {
  outline: none;
  border: none;
  border-radius: 14px;
  font-family: "Golos";
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #797986;
  background-color: #f5f5f5;
  padding: 15px 80px 15px 20px;

  @media screen and (max-width: 1330px) {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
}
</style>
