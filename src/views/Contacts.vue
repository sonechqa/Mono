<template>
  <main>
    <section class="contacts">
      <h1 class="contacts__title">КОНТАКТЫ</h1>
      <div class="contacts__details container">
        <div class="contacts__about-company">
          <div class="contacts__number-and-email">
            <a href="#" class="contacts__number">8 (903) 467 98 51</a>
            <a href="#" class="contacts__email">info@monevac.ru</a>
          </div>

          <div class="contacts__name">
            <p class="contacts__type">
              Полное наименование:<br />
              Общество с ограниченной ответственностью «МОНЕВАК»<br />
              Сокращенное наименование: ООО «МОНЕВАК»
            </p>
          </div>

          <div class="contacts__codes">
            <p>
              ИНН: 3448050610 <br />
              КПП: 344801001 <br />
              ОКПО: 67354285 <br />
              ОКАТО: 18401000000 <br />
              ОГРН: 1103461002480 <br />
              Код по ОКВЭД: 51.70
            </p>
          </div>

          <div class="contacts__requisites">
            <p>
              Банк: Филиал «Ростовский» ОАО «Альфа-Банк» г Ростов на Дону <br />
              БИК: 046015207 <br />
              к/с: 30101810500000000207 <br />
              р/с: 40702810926090000003
            </p>
          </div>

          <div class="contacts__address">
            <p>
              Юридический адрес: 400080, Волгоградская обл. г. Волгоград <br />
              ул. Командира Рудь,14А, офис 13 <br />
              Почтовый адрес: 400080, Волгоградская обл. г. Волгоград <br />
              ул. Командира Рудь, 14А, офис 13
            </p>
          </div>
        </div>

        <div class="contacts__questions">
          <h2 class="contacts__have-questions">ОСТАЛИСЬ ВОПРОСЫ?</h2>
          <form class="contacts__user-data">
            <Input placeholder="Ваше имя" />
            <Input placeholder="Ваш телефон" />
          </form>

          <form>
            <TextArea placeholder="Ваше сообщение" />
            <Checkbox />
            <Button>ЗАДАТЬ ВОПРОС</Button>
          </form>
        </div>
      </div>
    </section>

    <section class="map">
      <Map />
    </section>

    <section class="location container">
      <div
        v-for="(city, index) in cities"
        v-bind:key="index"
        class="location__city"
      >
        <div class="location__title">
          {{ city.title }}
        </div>

        <a href="#" class="location__number">
          {{ city.numberOne }} <br />
          {{ city.numberTwo }}
        </a>

        <div class="location__address">
          {{ city.address }}
        </div>

        <a
          href="https://www.google.com/maps/dir///@52.9599085,43.5290774,6z"
          class="location__path"
        >
          {{ city.path }}
        </a>

        <div class="location__schedule">
          {{ city.schedule }}
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Input from "../components/ui/Input.vue";
import TextArea from "../components/ui/TextArea.vue";
import Checkbox from "../components/ui/Checkbox.vue";
import Button from "../components/ui/Button.vue";
import Map from "../components/map/Map.vue";

export default {
  name: "Contacts",

  components: {
    Input,
    TextArea,
    Checkbox,
    Button,
    Map,
  },

  data() {
    return {
      cities: [
        {
          title: "МОСКВА",
          numberOne: "+7 (499) 136-17-18",
          numberTwo: "+7 (903) 467-98-51",
          address:
            "115114, ул. Дербеневская, д. 1, стр. 1, подъезд 44, офис 6 (станция метро 'Павелецкая')",
          path: "Проложить маршрут",
          schedule: "Режим работы: c 10:00 до 18:00",
        },
        {
          title: "ВОЛГОГРАД",
          numberOne: "+7 (8442) 65-08-88",
          numberTwo: "+7 (8442) 65-08-80",
          address: "400080, ул. Командира Рудь, 14А",
          path: "Проложить маршрут",
          schedule: "Режим работы: c 08:00 до 17:00",
        },
        {
          title: "КРАСНОДАР",
          numberOne: "+7 (861) 292-71-88",
          numberTwo: "+7 (903) 467-98-51",
          address: "350015, ул. Митрофана Седина, 176",
          path: "Проложить маршрут",
          schedule: "Режим работы: c 08:00 до 17:00",
        },
        {
          title: "САРАТОВ",
          numberOne: "+7 (927) 626-00-50",
          numberTwo: "+7 (903) 467-98-51",
          address: "410080, пр-т Строителей, 1",
          path: "Проложить маршрут",
          schedule: "Режим работы: c 10:00 до 18:00",
        },
        {
          title: "ВОРОНЕЖ",
          numberOne: "+7 (473) 229-63-78",
          numberTwo: "+7 (903) 467-98-51",
          address: "394030, ул. Комиссаржевской, 10",
          path: "Проложить маршрут",
          schedule: "Режим работы: c 10:00 до 18:00",
        },
        {
          title: "ЕРЕВАН",
          numberOne: "+374 91 21 90 69",
          numberTwo: "+374 60 50 90 69",
          address: "Район Аван 4, дом 2",
          path: "Проложить маршрут",
          schedule: "Режим работы: c 10:00 до 18:00",
        },
        {
          title: "НОВОСИБИРСК",
          numberOne:
            "+7 (383) 20-62-461; +7 (383) 20-62-711 +7 (903) 467-98-51",
          numberTwo: "Факс: +7 (383) 20-62-209; +7 (383) 20-62-210",
          address: "630039, ул. Никитина 116, к.3",
          path: "Проложить маршрут",
          schedule: "Режим работы: c 10:00 до 18:00",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.contacts__title {
  font-family: "RoadRadio";
  font-weight: 400;
  font-size: 46px;
  line-height: 100%;
  color: #262633;
  text-align: center;
  background-color: #f5f5f5;
  margin-top: 0;
  padding-top: 25px;
  padding-bottom: 25px;

  @media screen and (max-width: 980px) {
    font-size: 32px;
  }
}

.contacts__details {
  display: flex;

  @media screen and (max-width: 660px) {
    flex-direction: column;
  }
}

.contacts__about-company {
  margin-right: 50px;
  width: 50%;

  @media screen and (max-width: 1160px) {
    margin-right: 70px;
  }

  @media screen and (max-width: 660px) {
    width: 100%;
  }
}

.contacts__questions {
  width: 50%;

  @media screen and (max-width: 660px) {
    width: 100%;
  }
}

.contacts__have-questions {
  margin-top: 0;
  font-family: "RoadRadio";
  font-weight: 400;
  font-size: 36px;
  line-height: 110%;
  color: #262633;

  @media screen and (max-width: 980px) {
    font-size: 28px;
  }

  @media screen and (max-width: 660px) {
    margin-top: 50px;
  }

  @media screen and (max-width: 365px) {
    font-size: 20px;
  }
}

.contacts__user-data {
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1330px) {
    flex-direction: column;
  }
}

.contacts__number-and-email {
  display: flex;
  flex-direction: column;
}

.contacts__number {
  text-decoration: none;
  font-family: "RoadRadio";
  font-weight: 400;
  font-size: 36px;
  line-height: 110%;
  color: #262633;
  transition: color ease 0.3s;

  &:hover {
    color: #555572;
  }

  @media screen and (max-width: 980px) {
    font-size: 28px;
  }
}

.contacts__email {
  text-decoration: none;
  font-family: "Golos";
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  color: #bf2738;
  transition: color ease 0.3s;

  &:hover {
    color: #ca3e4e;
  }
}

.contacts__type {
  font-family: "Golos";
  font-weight: 400;
  font-size: 17px;
  color: #262633;

  @media screen and (max-width: 980px) {
    font-size: 14px;
  }
}

.contacts__codes,
.contacts__requisites,
.contacts__address {
  font-family: "Golos";
  font-weight: 400;
  font-size: 13px;
  line-height: 150%;
  color: #808080;
}

.location {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 913px) {
    justify-content: center;
  }

  &.container {
    @media screen and (max-width: 320px) {
      margin: 0 15px;
    }
  }
}

.location__city {
  background-color: #f5f5f5;
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 10px;
  margin-top: 30px;
  box-sizing: border-box;
  min-height: 310px;

  &:not(:last-child) {
    max-width: 300px;
    width: 100%;

    @media screen and (max-width: 1300px) {
      max-width: 270px;
    }

    @media screen and (max-width: 1200px) {
      margin-right: 15px;
    }

    @media screen and (max-width: 768px) {
      max-width: 335px;
      margin-right: 10px;
    }

    @media screen and (max-width: 750px) {
      max-width: 300px;
    }

    @media screen and (max-width: 678px) {
      max-width: 350px;
    }

    @media screen and (max-width: 420px) {
      max-width: 300px;
      margin-right: 0;
    }
  }

  &:last-child {
    padding-right: 90px;

    @media screen and (max-width: 1300px) {
      padding-right: 60px;
    }

    @media screen and (max-width: 1200px) {
      margin-left: auto;
      margin-right: auto;
    }

    @media screen and (max-width: 678px) {
      max-width: 350px;
      min-height: 395px;
      margin-left: 0;
      margin-right: 10px;
    }

    @media screen and (max-width: 420px) {
      max-width: 320px;
    }

    @media screen and (max-width: 356px) {
      padding-right: 40px;
    }

    @media screen and (max-width: 320px) {
      padding-right: 20px;
    }
  }

  &:not(:first-child) {
    .location__schedule {
      margin-top: 60px;
    }
  }

  &:first-child {
    .location__schedule {
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 370px) {
    padding-left: 10px;
  }
}

.location__title {
  font-family: "RoadRadio";
  font-weight: 400;
  font-size: 26px;
  line-height: 110%;
  color: #262633;
  padding-top: 30px;
  margin-bottom: 15px;
}

.location__number {
  text-decoration: none;
  font-family: "Golos";
  font-weight: 400;
  font-size: 19px;
  line-height: 150%;
  color: #262633;
  margin-bottom: 10px;
}

.location__address {
  font-family: "Golos";
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #797986;
}

.location__path {
  text-decoration: none;
  font-family: "Golos";
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #bf2738;
}

.location__schedule {
  font-family: "Golos";
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #262633;
  display: block;
  margin-top: auto;
}
</style>
