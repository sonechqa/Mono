<template>
  <div id="map">
    <Mapbox
      accessToken="pk.eyJ1Ijoic29uZWNocWEiLCJhIjoiY2w1cXFmbTcxMTU4ajNjb2VtdHZoazRmayJ9.jNgD7NCLtnKo8iS4y9onLA"
      :map-options="{
        style: 'mapbox://styles/mapbox/light-v9',
        center: [-96, 37.8],
        zoom: 3,
      }"
    />
  </div>
</template>

<script>
import Mapbox from "mapbox-gl-vue";

export default {
  name: "Map",
  components: {
    Mapbox,
  },
};
</script>

<style lang="scss">
#map {
  width: 100%;
  height: 600px;
  margin-top: 60px;
}
</style>
