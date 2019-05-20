
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



$(document).ready(function(){
$(".unlock-btn").click(function(){
  $("#remove").removeClass("locked");
  // $("#remove-id").removeClass("warning");
});
});

// if($("#remove").hasClass("locked")) {
//   console.log("true");
// 	$("btn-blue").click(function() {
//     console.log("true");
//     $(".termen-btn").removeClass("warning");
//   });
// };

// $(document).ready(function(){
//   if($("#remove").hasClass("locked")) {
// $(".termen-btn").click(function(){
//   console.log('test');
//   $("#remove-id").addClass("warning");
// });
// };
// });


//Tabs
var sliders = [
  "slide1",
  "slide2",
  "slide3"
]

var currentTab = 0;

var sliderPs = document.getElementById("slide-outer").children;

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
  console.log(tabName);
  var slider = document.getElementById(tabName);
  slider.className = "zichtbaar";
}

function makeInvisible() {
  for(var i = 0; i < sliderPs.length; i++) {
     sliderPs[i].className="onzichtbaar";
  }
}

//
