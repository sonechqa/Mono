<template>
  <div id="map"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import MapboxLanguage from "@mapbox/mapbox-gl-language";

export default {
  name: "Map",
  components: {},
  data() {
    return {
      map: null,
    };
  },

  mounted() {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic29uZWNocWEiLCJhIjoiY2w1cXB5dnM2MG1qbDNrbjJiNHlybDUyMSJ9.hwn23gzWK2v5qshO2Axa3Q";
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/light-v10",
      center: [49.90423022680362, 52.19804952930641],
      zoom: 4,
      projection: "mercator",
    });

    mapboxgl.setRTLTextPlugin(
      "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js"
    );
    map.addControl(
      new MapboxLanguage({
        defaultLanguage: "ru",
      })
    );

    const markers = [
      [49.824514360691275, 53.581385163641194],
      [50.14311787284804, 55.249661979808934],
      [40.32134050994717, 54.433597539802385],
      [36.04765887037775, 52.41779885199467],
      [63.06700965279608, 53.10984885629324],
    ];

    markers.forEach((coordinates) => {
      const el = document.createElement("div");
      el.className = "map__marker";
      new mapboxgl.Marker(el).setLngLat(coordinates).addTo(map);
    });

    map.on("style.load", () => {
      map.scrollZoom.disable();
    });

    this.map = map;
  },
};
</script>

<style lang="scss">
#map {
  width: 100%;
  height: 600px;
  margin-top: 60px;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    height: 480px;
    margin-top: 50px;
  }
}

.map__marker {
  background-image: url("@/assets/marker.png");
  background-size: cover;
  width: 36px;
  height: 40px;
  cursor: pointer;
}
</style>
