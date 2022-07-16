<template>
  <textarea
    name=""
    id=""
    cols="65"
    rows="5"
    :placeholder="placeholder"
  ></textarea>
</template>

<script>
export default {
  name: "TextArea",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
textarea {
  outline: none;
  border: none;
  resize: none;
  border-radius: 14px;
  font-family: "Golos";
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #797986;
  background-color: #f5f5f5;
  padding: 15px 20px 20px 20px;
  margin-top: 25px;
}
</style>
