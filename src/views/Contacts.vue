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
</style>
