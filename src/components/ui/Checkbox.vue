<template>
  <div class="checkbox">
    <input id="agreement" class="checkbox__custom-checkbox" type="checkbox" />
    <label for="agreement" class="checkbox__label">
      Я подтверждаю свое согласие с политикой в отношении &nbsp;
      <a href="#" class="checkbox__link">обработки персональных данных</a>
    </label>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
};
</script>

<style lang="scss">
#agreement {
  opacity: 0;
}

.checkbox__label {
  font-family: "Golos";
  font-weight: 400;
  font-size: 13px;
  line-height: 120%;
  color: #808080;
}

.checkbox__link {
  color: #262633;
  text-decoration: none;
}

.checkbox__custom-checkbox + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}

.checkbox__custom-checkbox + label::before {
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  flex-grow: 0;
  background-color: #f5f5f5;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 25px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

.checkbox__custom-checkbox:not(:disabled):not(:checked) + label:hover::before {
  background-color: #bf2738;
  transition: background-color ease 0.3s;
}

.checkbox__custom-checkbox:checked + label::before {
  background-color: #bf2738;
  background-image: url("@/assets/checkmark.png");
}
</style>
