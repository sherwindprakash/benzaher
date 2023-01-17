import { createApp } from "vue";
import App from "./App.vue";

//import "./registerServiceWorker";
import router from "./router";

import './registerServiceWorker'
//import store from "./store";

createApp(App).use(router).mount("#app");

//Location
navigator.geolocation.getCurrentPosition((position) => {
  const { latitude, longitude } = position.coords;
  // Show a map centered at latitude / longitude.
  console.log(position.coords);
  sessionStorage.setItem('latitude', position.coords.latitude);
  sessionStorage.setItem('longitude', position.coords.longitude);

});
//

// Notification
function showNotification() {
  const notification = new Notification("Benzaher", {
    body: "Welcome to Benzaher Website",
    icon: "wiki.png",
  });
  notification.onclick = (e) => {
    window.location.href = "https://binzaher.com/";
  };
}

//console.log(Notification.permission);

if (Notification.permission === "granted") {
  //alert("we have permisstion");
  //showNotification();
} else if (Notification.permission !== "denied") {
  Notification.requestPermission().then((permission) => {
    console.log(permission);
    showNotification();
  });
}

(function () {
  if ("Notification" in window) {
    var permission = Notification.permission;

    if (permission === "denied" || permission === "granted") {
      return;
    }

    Notification.requestPermission().then(function () {
      showNotification();
    });
  }
})();
