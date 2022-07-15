<template>
  <section class="contacts">
    <h1 class="contacts__title">КОНТАКТЫ</h1>
    <div class="contacts_details">
      <div class="contacts__about-company">
        <div class="contacts__number-and-email">
          <a href="#" class="contacts__number">8 (903) 467 98 51</a>
          <a href="#" class="contacts__email">info@monevac.ru</a>
        </div>

        <div class="contacts__name">
          <p class="contacts__type">
            Полное наименование: Общество с ограниченной ответственностью
            «МОНЕВАК»
          </p>
          <p class="contacts__type">Сокращенное наименование: ООО «МОНЕВАК»</p>
        </div>

        <div class="contacts__codes">
          <p>ИНН: 3448050610</p>
          <p>КПП: 344801001</p>
          <p>ОКПО: 67354285</p>
          <p>ОКАТО: 18401000000</p>
          <p>ОГРН: 1103461002480</p>
          <p>Код по ОКВЭД: 51.70</p>
        </div>

        <div class="contacts__requisites">
          <p>Банк: Филиал «Ростовский» ОАО «Альфа-Банк» г Ростов на Дону</p>
          <p>БИК: 046015207</p>
          <p>к/с: 30101810500000000207</p>
          <p>р/с: 40702810926090000003</p>
        </div>
      </div>

      <div class="contacts__questions"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contacts",
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
</style>
