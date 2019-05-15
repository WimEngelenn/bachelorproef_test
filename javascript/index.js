
// Vue.component('Beginscherm', {
// template: `
// <div class="content container">
//   <img id="welkom_logo" src="public/afbeeldingen/logo_KVB.png">
// <h1>Welkom</h1>
//
// <p><span>Krachttraining Voor Beginners</span> is jouw bron van informatie over krachttraining en voeding.</p>
//
// <a href="introductie/introductie.html" target="_self">Laten we starten!</a>
// </div>
// `
// });

var app = new Vue({
  el: '#app',
})


//Tabs
var sliders = [
  "slide1",
  "slide2",
  "slide3"
]

currentTab = 0;

var sliderPs = document.getElementsByTagName("p");

function next() {
  currentTab++;
  makeInvisible();
  makeVisible(sliders[currentTab]);
}

function previous() {
  currentTab--;
  makeInvisible();
  makeVisible(sliders[currentTab]);
}

function makeVisible(tabName) {
  var slider = document.getElementById(tabName);
  slider.className = "zichtbaar";
}

function makeInvisible() {
  for(var i = 0; i < sliderPs.length; i++) {
     sliderPs[i].className="onzichtbaar";
  }
}
