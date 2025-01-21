import Vue from "vue";

import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCWXEVNJb5iU2GQSkIb__21md_CSZZ6o68",
    libraries: "places"
  },
  installComponents: true
});
