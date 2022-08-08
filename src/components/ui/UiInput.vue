<template>
  <div class="uiInput" :class="{ uiInput_erroneous: error !== '' }">
    <input type="text" :placeholder="placeholder" v-model="inputValue" />
    <p v-if="error !== ''">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: "UiInput",
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
    inputValue: {
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
input {
  outline: none;
  border: 2px solid #f5f5f5;
  border-radius: 14px;
  font-family: "Golos";
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #797986;
  background-color: #f5f5f5;
  padding: 15px 80px 15px 20px;
  transition: background-color, border ease 0.3s;

  &:hover {
    background-color: #ffffff;
    border: 2px solid #e6e6e6;
  }

  @media screen and (max-width: 360px) {
    width: 100%;
  }
}

.uiInput + .uiInput {
  @media screen and (max-width: 1330px) {
    margin-top: 10px;
  }
}

.uiInput_erroneous {
  input {
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
