<template>
  <div class="uiTextArea" :class="{ uiTextArea_erroneous: error !== '' }">
    <textarea
      name=""
      id=""
      :placeholder="placeholder"
      v-model="textAreaValue"
    ></textarea>
    <p v-if="error !== ''">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: "UiTextArea",
  props: {
    placeholder: {
      type: String,
      default: "",
    },

    error: {
      type: String,
      default: "",
    },

    value: {
      type: String,
      default: "",
    },
  },

  computed: {
    textAreaValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
};
</script>

<style lang="scss">
textarea {
  outline: none;
  border: 2px solid #f5f5f5;
  resize: none;
  width: 100%;
  box-sizing: border-box;
  height: 150px;
  border-radius: 14px;
  font-family: "Golos";
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #797986;
  background-color: #f5f5f5;
  padding: 15px 20px 20px 20px;
  margin-top: 25px;
  transition: background-color, border ease 0.3s;

  &:hover {
    background-color: #ffffff;
    border: 2px solid #e6e6e6;
  }
}

.uiTextArea_erroneous {
  textArea {
    background-color: #f7e5e7;
    border: 2px solid #f7e5e7;
    color: #bf2738;
  }

  p {
    font-family: "Golos";
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #bf2738;
    margin-left: 20px;
  }
}
</style>
