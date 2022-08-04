<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__information">
        <ul class="footer__materials">
          <li class="footer__product">
            <a href="#" class="footer__link">Упаковочное оборудование</a>
          </li>
          <li class="footer__product">
            <a href="#" class="footer__link">Пленки</a>
          </li>
          <li class="footer__product">
            <a href="#" class="footer__link">Пакеты</a>
          </li>
          <li class="footer__product">
            <a href="#" class="footer__link">Прочие материалы</a>
          </li>
        </ul>

        <ul class="footer__about-us">
          <li class="footer__company">
            <a href="#" class="footer__for-clients">О Компании</a>
          </li>
          <li class="footer__company">
            <a href="#" class="footer__for-clients">Партнеры</a>
          </li>
          <li class="footer__company">
            <a href="#" class="footer__for-clients">Доставка</a>
          </li>
          <li class="footer__company">
            <a href="#" class="footer__for-clients">Оплата</a>
          </li>
          <li class="footer__company">
            <a href="#" class="footer__for-clients">Обмен и возврат</a>
          </li>
          <li class="footer__company">
            <a href="#" class="footer__for-clients">Контакты</a>
          </li>
          <li class="footer__company">
            <a href="#" class="footer__for-clients">Распродажа</a>
          </li>
          <li class="footer__company">
            <a href="#" class="footer__for-clients">Сервис</a>
          </li>
          <li class="footer__company">
            <a href="#" class="footer__for-clients">Новости</a>
          </li>
        </ul>
      </div>

      <div class="footer__contacts">
        <div class="footer__wrapper">
          <div class="footer__numbers">
            <a href="#" class="footer__number">+7 (499) 136-17-18</a>
            <a href="#" class="footer__number">+7 (903) 467-98-51</a>
          </div>

          <Button>ОБРАТНЫЙ ЗВОНОК</Button>

          <div class="footer__email">
            <a href="#" class="footer__email-link">info@monevac.ru</a>
          </div>
        </div>

        <div class="footer__our-location">
          <p class="footer__address">
            Москва, ул. Дербеневская, д. 1, стр. 1, подъезд 44, офис 6 (станция
            метро "Павелецкая")
          </p>
        </div>
      </div>

      <div class="footer__copyright">
        <div class="footer__rights-reserved">
          © Моневак 2020 | Все права защищены
        </div>

        <div class="footer__developer">
          Разработка и продвижение сайта -
          <a href="#" class="footer__developer-link">TODO</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Button from "../ui/Button.vue";

export default {
  name: "Footer",
  components: {
    Button,
  },
};
</script>

<style lang="scss">
.footer {
  margin-top: 100px;
  background-color: #222225;
  position: relative;

  .container {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
  }

  &::before {
    content: "";
    width: 50%;
    height: 100%;
    background-color: #2a2a2e;
    position: absolute;
    z-index: 1;
    left: 50%;
  }

  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #2d2d30;
    position: absolute;
    z-index: 2;
    top: 85%;
  }
}

.footer__information {
  width: 50%;
  padding-top: 60px;
}

.footer__materials {
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
}

.footer__product {
  list-style-type: none;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
}

.footer__link {
  text-decoration: none;
  font-family: "Golos";
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
  color: #ffffff;
}

.footer__about-us {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-right: 155px;
  margin-top: 70px;
}

.footer__company {
  list-style-type: none;

  &:not(:last-child) {
    margin-right: 20px;
  }
}

.footer__for-clients {
  text-decoration: none;
  font-family: "Akzidenz-Grotesk Pro";
  font-weight: 400;
  font-size: 16px;
  line-height: 180%;
  color: #797986;

  &:hover {
    color: #ffffff;
    transition: color ease 0.3s;
  }
}

.footer__contacts {
  width: 50%;
  padding-top: 60px;
  padding-left: 120px;
}

.footer__wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .button {
    border: 2px solid #494950;
    background-color: transparent;
    font-family: "RoadRadio";
    font-style: normal;
    font-size: 14px;
    line-height: 14px;
    color: #ffffff;
    height: 50%;

    &:hover {
      background-color: #414147;
      transition: background-color ease 0.3s;
    }

    @media screen and (max-width: 1260px) {
      width: 50%;
    }
  }

  @media screen and (max-width: 1260px) {
    flex-direction: column;
  }
}

.footer__numbers {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.footer__number {
  text-decoration: none;
  font-family: "Golos";
  font-weight: 500;
  font-size: 30px;
  line-height: 150%;
  color: #ffffff;

  &:hover {
    color: #ffffffb4;
    transition: color ease 0.3s;
  }
}

.footer__email-link {
  text-decoration: none;
  font-family: "Golos";
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
  color: #f23147;

  &:hover {
    color: #ca3e4e;
    transition: color ease 0.3s;
  }
}

.footer__address {
  font-family: "Akzidenz-Grotesk Pro";
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: #ffffff;
  margin-top: 110px;
  margin-bottom: 0;
  margin-right: 200px;
}

.footer__copyright {
  display: flex;
  width: 100%;
}

.footer__rights-reserved,
.footer__developer {
  font-family: "Akzidenz-Grotesk Pro";
  font-weight: 400;
  font-size: 13px;
  line-height: 110%;
  color: #797986;
  width: 50%;
  margin-top: 65px;
  padding-bottom: 30px;
}

.footer__developer {
  padding-left: 120px;
}

.footer__developer-link {
  text-decoration: none;
  color: #ffffff;
}
</style>
