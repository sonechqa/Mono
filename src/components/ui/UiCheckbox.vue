<template>
  <div class="uiCheckbox">
    <input
      id="agreement"
      class="uiCheckbox__custom-checkbox"
      type="checkbox"
      v-model="inputValue"
    />
    <label for="agreement" class="uiCheckbox__label">
      <p class="uiCheckbox__processing">
        Я подтверждаю свое согласие с политикой в отношении
        <a href="#" class="uiCheckbox__link">обработки персональных данных</a>
      </p>
    </label>
  </div>
</template>

<script>
export default {
  name: "UiCheckbox",

  props: {
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
#agreement {
  opacity: 0;
}

.uiCheckbox__label {
  font-family: "Golos";
  font-weight: 400;
  font-size: 13px;
  line-height: 120%;
  color: #808080;
  margin-bottom: 30px;
}

.uiCheckbox__link {
  color: #262633;
  text-decoration: none;
}

.uiCheckbox__custom-checkbox + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}

.uiCheckbox__custom-checkbox + label::before {
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  flex-grow: 0;
  background-color: #f5f5f5;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 15px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

.uiCheckbox__custom-checkbox:not(:disabled):not(:checked)
  + label:hover::before {
  background-color: #bf2738;
  transition: background-color ease 0.3s;
}

.uiCheckbox__custom-checkbox:checked + label::before {
  background-color: #bf2738;
  background-image: url("@/assets/checkmark.png");
}

.uiCheckbox__processing {
  margin-top: 0;
  margin-bottom: 0;
}
</style>
