<template>
  <header class="header">
    <div class="header__top container">
      <Burger />
      <ul class="header__menu">
        <li class="header__services">
          <a href="#" class="header__service">Упаковка</a>
        </li>

        <li class="header__services">
          <a href="#" class="header__service">Оборудование</a>
        </li>

        <li class="header__services">
          <a href="#" class="header__service">Сервис и запчасти</a>
        </li>
      </ul>

      <img
        src="@/assets/logo.png"
        alt="Моневак"
        class="header__logo"
        v-if="$mq == 'sm' || $mq == 'lg'"
      />
      <img
        src="@/assets/logo2.png"
        alt="Моневак"
        class="header__logo2"
        v-else
      />

      <ul class="header__actions">
        <li class="header__item">
          <a href="#">
            <img src="@/assets/comparison.png" alt="Сравнение" />
          </a>
        </li>

        <li class="header__item">
          <a href="#">
            <img src="@/assets/search.png" alt="Поиск" />
          </a>
        </li>
      </ul>

      <div class="header__contacts">
        <a href="#" class="header__number">+7 (499) 136-17-18</a>
        <a href="#" class="header__email">info@monevac.ru</a>
      </div>

      <Button>ОСТАВИТЬ ЗАЯВКУ</Button>
    </div>

    <nav class="header__bottom">
      <ul class="header__navigation">
        <li class="header__variants">
          <router-link to="/" class="header__variant">Главная</router-link>
        </li>

        <li class="header__variants">
          <router-link to="/contacts" class="header__variant">
            Контакты
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import Burger from "./Burger.vue";
import Button from "../ui/Button.vue";

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
  padding-top: 20px;

  .button {
    @media screen and (max-width: 1030px) {
      display: none;
    }
  }
}

.header__top {
  display: flex;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 1320px) {
    width: 95%;
  }

  @media screen and (max-width: 720px) {
    width: 90%;
  }

  @media screen and (max-width: 480px) {
    width: 88%;
  }

  @media screen and (max-width: 410px) {
    width: 85%;
  }

  @media screen and (max-width: 320px) {
    width: 83%;
  }
}

.header__menu {
  display: flex;
  justify-content: space-between;
  margin-right: auto;
}

.header__services {
  list-style-type: none;
  margin-right: 45px;

  @media screen and (max-width: 1240px) {
    margin-right: 30px;
  }

  @media screen and (max-width: 1080px) {
    margin-right: 20px;
  }

  @media screen and (max-width: 1030px) {
    margin-right: 30px;

    &:last-child {
      display: none;
    }
  }

  @media screen and (max-width: 730px) {
    display: none;
  }
}

.header__service {
  text-decoration: none;
  color: #262633;
  font-family: "Golos";
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  transition: color ease 0.3s;

  &:hover {
    color: #555572;
  }
}

.header__logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.header__logo2 {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.header__actions {
  display: flex;
  padding: 0;
}

.header__item {
  list-style-type: none;
}

.header__item + .header__item {
  margin-left: 20px;
}

.header__contacts {
  margin-right: 60px;
  margin-left: 60px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1240px) {
    margin-right: 35px;
    margin-left: 35px;
  }

  @media screen and (max-width: 1080px) {
    margin-right: 25px;
    margin-left: 25px;
  }

  @media screen and (max-width: 1030px) {
    margin-right: 45px;
    margin-left: 45px;
  }

  @media screen and (max-width: 730px) {
    display: none;
  }
}

.header__number {
  font-family: "Golos";
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #262633;
  margin-bottom: 5px;
  text-decoration: none;
  transition: color ease 0.3s;

  &:hover {
    color: #555572;
  }
}

.header__email {
  font-family: "Graphik LC Web";
  font-weight: 400;
  font-size: 13px;
  line-height: 120%;
  color: #797986;
  text-decoration: none;
  transition: color ease 0.3s;

  &:hover {
    color: #9b9baa;
  }
}

.header__bottom {
  border-bottom: 1px solid #dddddd;
  background-color: #f5f5f5;
  margin-top: 20px;
}

.header__navigation {
  display: flex;
  justify-content: center;
  padding-left: 0;
  padding-top: 15px;
}

.header__variants {
  list-style-type: none;
  position: relative;

  &:not(:last-child) {
    margin-right: 50px;

    &::before {
      content: "";
      position: absolute;
      background-color: #797986;
      width: 3px;
      height: 3px;
      border-radius: 50%;
      left: 150%;
      top: 50%;
    }
  }
}

.header__variant {
  text-decoration: none;
  font-family: "Golos";
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #797986;
}

.router-link-exact-active {
  color: #c9c9cf;
}
</style>
