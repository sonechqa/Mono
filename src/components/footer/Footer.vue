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

          <UiButton>ОБРАТНЫЙ ЗВОНОК</UiButton>

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
          <a href="#" class="footer__developer-link">Sonechqa</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import UiButton from "../ui/UiButton.vue";

export default {
  name: "Footer",
  components: {
    UiButton,
  },
};
</script>

<style lang="scss">
.footer {
  margin-top: 100px;
  background-color: #222225;
  position: relative;
  overflow: hidden;

  .container {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;

    @media screen and (max-width: 670px) {
      flex-direction: column;
      align-items: center;
    }

    @media screen and (max-width: 332px) {
      margin: 0 20px;
    }
  }

  &::before {
    content: "";
    width: 50%;
    height: 100%;
    background-color: #2a2a2e;
    position: absolute;
    z-index: 1;
    left: 50%;

    @media screen and (max-width: 670px) {
      display: none;
    }
  }

  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #2d2d30;
    position: absolute;
    z-index: 2;
    top: 85%;

    @media screen and (max-width: 670px) {
      top: 88%;
    }
  }
}

.footer__information {
  width: 50%;
  padding-top: 60px;

  @media screen and (max-width: 670px) {
    padding-top: 40px;
  }

  @media screen and (max-width: 610px) {
    width: 70%;
  }

  @media screen and (max-width: 452px) {
    width: 100%;
  }
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

  @media screen and (max-width: 890px) {
    font-size: 20px;
    line-height: 120%;
  }

  @media screen and (max-width: 768px) {
    font-family: "Inter";
    transition: color ease 0.3s;

    &:hover {
      color: #f23147;
    }
  }
}

.footer__about-us {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-right: 155px;
  margin-top: 70px;

  @media screen and (max-width: 950px) {
    margin-right: 120px;
  }

  @media screen and (max-width: 890px) {
    margin-right: 80px;
  }

  @media screen and (max-width: 820px) {
    margin-right: 70px;
  }

  @media screen and (max-width: 800px) {
    margin-right: 50px;
  }

  @media screen and (max-width: 760px) {
    margin-right: 20px;
  }

  @media screen and (max-width: 700px) {
    margin-right: 0px;
  }

  @media screen and (max-width: 670px) {
    margin-bottom: 0;
    margin-top: 15px;
  }

  @media screen and (max-width: 452px) {
    width: 100%;
  }
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
  transition: color ease 0.3s;

  &:hover {
    color: #ffffff;
  }
}

.footer__contacts {
  width: 50%;
  padding-top: 60px;
  padding-left: 120px;

  @media screen and (max-width: 950px) {
    padding-left: 80px;
  }

  @media screen and (max-width: 820px) {
    padding-left: 40px;
  }

  @media screen and (max-width: 670px) {
    padding-left: 0;
    padding-top: 0;
    position: relative;
    width: 100%;
    margin-top: 40px;

    &::before {
      content: "";
      width: 100vw;
      height: 180%;
      left: -30px;
      background-color: #2a2a2e;
      position: absolute;
      z-index: -1;

      @media screen and (max-width: 332px) {
        left: -20px;
      }
    }
  }
}

.footer__wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .uiButton {
    border: 2px solid #494950;
    background-color: transparent;
    font-family: "RoadRadio";
    font-style: normal;
    font-size: 14px;
    line-height: 14px;
    color: #ffffff;
    height: 50%;
    transition: background-color ease 0.3s;

    &:hover {
      background-color: #414147;
    }

    @media screen and (max-width: 1260px) {
      margin-bottom: 15px;
      width: auto;
    }
  }

  @media screen and (max-width: 1260px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (max-width: 670px) {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 40px;
  }

  @media screen and (max-width: 610px) {
    width: 70%;
  }

  @media screen and (max-width: 452px) {
    width: 100%;
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
  transition: color ease 0.3s;

  &:hover {
    color: #ffffffb4;
  }

  @media screen and (max-width: 890px) {
    font-size: 23px;
  }
}

.footer__email-link {
  text-decoration: none;
  font-family: "Golos";
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
  color: #f23147;
  transition: color ease 0.3s;

  &:hover {
    color: #ca3e4e;
  }

  @media screen and (max-width: 890px) {
    font-size: 19px;
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

  @media screen and (max-width: 1260px) {
    margin-top: 40px;
  }

  @media screen and (max-width: 1200px) {
    margin-right: 150px;
  }

  @media screen and (max-width: 1080px) {
    margin-top: 50px;
  }

  @media screen and (max-width: 1028px) {
    margin-right: 120px;
  }

  @media screen and (max-width: 950px) {
    margin-right: 90px;
  }

  @media screen and (max-width: 840px) {
    margin-top: 45px;
  }

  @media screen and (max-width: 748px) {
    margin-right: 50px;
  }

  @media screen and (max-width: 670px) {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 610px) {
    width: 70%;
  }

  @media screen and (max-width: 452px) {
    width: 100%;
  }
}

.footer__copyright {
  display: flex;
  width: 100%;

  @media screen and (max-width: 670px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 610px) {
    align-items: stretch;
    width: 70%;
  }

  @media screen and (max-width: 452px) {
    width: 100%;
  }
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

  @media screen and (max-width: 670px) {
    margin-top: 0;
  }

  @media screen and (max-width: 610px) {
    width: 100%;
  }
}

.footer__rights-reserved {
  @media screen and (max-width: 670px) {
    padding-bottom: 10px;
    margin-top: 70px;
  }
}

.footer__developer {
  padding-left: 120px;

  @media screen and (max-width: 950px) {
    padding-left: 80px;
  }

  @media screen and (max-width: 820px) {
    padding-left: 40px;
  }

  @media screen and (max-width: 670px) {
    padding-left: 0;
  }
}

.footer__developer-link {
  text-decoration: none;
  color: #ffffff;
}
</style>
