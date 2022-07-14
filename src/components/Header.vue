<template>
  <div class="header container">
    <Burger />
    <ul class="menu">
      <li class="services"><a href="#">Упаковка</a></li>
      <li class="services"><a href="#">Оборудование</a></li>
      <li class="services"><a href="#">Сервис и запчасти</a></li>
    </ul>
    <img src="@/assets/logo.png" alt="Моневак" class="logo" />
    <ul class="nav">
      <li class="item">
        <a href="#" class="comparison">
          <img src="@/assets/comparison.png" alt="Сравнение" />
        </a>
      </li>
      <li class="item">
        <a href="#">
          <img src="@/assets/search.png" alt="Поиск" />
        </a>
      </li>
    </ul>
    <div class="contacts">
      <div class="number">+7 (499) 136-17-18</div>
      <div class="email">info@monevac.ru</div>
    </div>
    <Button />
  </div>
</template>

<script>
import Burger from "./header/Burger.vue";
import Button from "./ui/Button.vue";
export default {
  name: "Header",
  components: {
    Burger,
    Button,
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
}

.menu {
  display: flex;
  justify-content: space-between;
  margin-right: auto;
}

.services {
  list-style-type: none;
  margin-right: 45px;
}

.logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.nav {
  display: flex;
  padding: 0;
}

.item {
  list-style-type: none;
}

.comparison {
  margin-right: 20px;
}

a {
  text-decoration: none;
  color: #262633;
  font-family: "Golos";
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
}

.contacts {
  margin-right: 60px;
  margin-left: 60px;
}
</style>
