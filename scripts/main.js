'use strict';
/* ==========================================================================
navbar-toggle
========================================================================== */
$(".navbar-toggle").click(function(){
  $(".nav-mobile").stop().slideToggle();
});
if( $(window).width()> 992){
  $(".nav-mobile").css("display","none");
}
/* ==========================================================================
rating
========================================================================== */
/* HELPER: Checks Whether an Element Exists
----------------------------------------------------------------------------------------------------*/
(function( $ ) {

  $.fn.extend({
    exists: function() {
      if ( this.length > 0 ) {
        return true;
      } else {
        return false;
      }
    }
  });

})( jQuery );

$('.md-rating-3').raty({ score: 3 });
$('.md-rating-4').raty({ score: 4 });
$('.md-rating-5').raty({ score: 5 });

/* ==========================================================================
slider-ranger
========================================================================== */
jQuery("#Slider1").slider({
   from: 0,
    to: 10000,
   step: 1,
   smooth: true, round: 0,
   dimension: "",
   skin: "plastic" ,
});
jQuery("#Slider2").slider({
  from: 0,
   to: 10000,
  step: 1,
  smooth: true, round: 0,
  dimension: "",
  skin: "plastic"
});
/* ==========================================================================
minus-plus
========================================================================== */
$("#btn-minus").click(function(){
  var a=parseInt(document.getElementById("value-input").value)
  if(a>1){
    a--;
    document.getElementById("value-input").value=a;
  }
});
$("#btn-plus").click(function(){
  var a=parseInt(document.getElementById("value-input").value)
    a++;
    document.getElementById("value-input").value=a;
});

/* ==========================================================================
slider 3 home page
========================================================================== */
$('.slider3').slick({
  centerMode: true,
  centerPadding: '40px',
  slidesToShow: 3,
  arrows: true,
  speed: 700,
  dots: false,
  autoplay:false,
  autoplaySpeed:3000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
        infinite: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerPadding: '20px',
        centerMode: true,
        slidesToShow: 2,
        infinite: true,
        dots:false
      }
    },
    {
      breakpoint:510,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1,
        infinite: true,
        dots:false
      }
    }
  ]
});
/* ==========================================================================
slider 1 home page
========================================================================== */

$('.slider1').slick({
  centerMode: true,
  centerPadding: '19%',
  slidesToShow: 1,
  arrows: true,
  speed: 700,
  dots: false,
  autoplay:false,
  autoplaySpeed:3000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '7%',
        slidesToShow: 1,
        infinite: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerPadding: '7%',
        centerMode: true,
        slidesToShow: 1,
        infinite: true,
        dots:false
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: true,
        centerPadding: '10%',
        centerMode: true,
        slidesToShow: 1,
        infinite: true,
        dots:false
      }
    }
  ]
});
/* ==========================================================================
.slider2
========================================================================== */
$('.slider2').owlCarousel({
    stagePadding: 150,
    smartSpeed:1100,
    loop:true,
    margin:10,
    nav:false,
    items:1,

    nav:true,
  // responsive:{
  //       0:{
  //           items:1,
  //           stagePadding: 60
  //       },
  //       600:{
  //           items:1,
  //           stagePadding: 100
  //       },
  //       1000:{
  //           items:1,
  //           stagePadding: 200
  //       },
  //       1200:{
  //           items:1,
  //           stagePadding: 250
  //       },
  //       1400:{
  //           items:1,
  //           stagePadding: 300
  //       },
  //       1600:{
  //           items:1,
  //           stagePadding: 350
  //       },
  //       1800:{
  //           items:1,
  //           stagePadding: 400
  //       }
  //   }
})
/* ==========================================================================
search map
========================================================================== */

   var availableTags = [
     "ActionScript",
     "AppleScript",
     "Asp",
     "BASIC",
     "C",
     "C++",
     "Clojure",
     "COBOL",
     "ColdFusion",
     "Erlang",
     "Fortran",
     "Groovy",
     "Haskell",
     "Java",
     "JavaScript",
     "Lisp",
     "Perl",
     "PHP",
     "Python",
     "Ruby",
     "Scala",
     "Scheme"
   ];
   $( "#seach-select" ).autocomplete({
     source: availableTags
   });
   $( "#seach-select" ).focus(function(){

   });
/* ==========================================================================
select map
========================================================================== */
$(".chosen-select-no-results1").chosen();
$(".chosen-select-map").chosen().change(function(){
  var ctn=$('li.search-choice').length;
  $('.chosen-select-map li.search-choice div').remove();
  $('#get-info li.search-choice div').remove();
  $('#get-info li.search-choice').last().append('<div></div>');
  $("#get-info .search-choice-close").click(function(){
    $('#get-info li.search-choice').last().append('<div></div>');
  });
  $("#get-info .chosen-drop").hide();
  $("#get-info .chosen-choices").click(function(){
    if($('#get-info li.search-choice').length==2){
      alert("is not chose more 2 item");
    }
  });

  $("input").focus(function(){
    if($('#get-info li.search-choice').length==2){
      $("#get-info .chosen-drop").hide();
    }else{
      $("#get-info .chosen-drop").show();
    }
  });
  $("#get-info .chosen-choices").focus(function(){
    if($('#get-info li.search-choice').length==2){
      $("#get-info .chosen-drop").hide();
    }else {
      $("#get-info .chosen-drop").show();
    }
  });
  $("#get-info .search-choice span").click(false);
});
var map = AmCharts.makeChart("map-chart", {

  "type": "map",
  "theme": "light",

  "dataProvider": {
    "map": "worldLow",
    "getAreasFromMap": true
  },
  "areasSettings": {
    "autoZoom": false,
    "color": "#a8a8a8",
    "selectedColor": "#00489f",
    "selectable": true
  },
  "listeners": [{
    "event": "clickMapObject",
    "method": function(event) {
      // deselect the area by assigning all of the dataProvider as selected object
      map.selectedObject = map.dataProvider;

      if (event.mapObject.showAsSelected == false || typeof event.mapObject.showAsSelected == 'undefined') {
        event.mapObject.showAsSelected = true;
      } else if (event.mapObject.showAsSelected == true && event.mapObject.selectedColorReal == "#5EB7DE") {
        event.mapObject.selectedColorReal = "#CC0000";
      } else {
        event.mapObject.showAsSelected = false;
        event.mapObject.selectedColorReal = "#5EB7DE"
        map.returnInitialColor(event.mapObject);
      }
    }
  }],
});

map.addListener("clickMapObject", function(event) {
  $("#get-info span").innerHTML += '<span class="remove" onclick="myFunction()">'+event.mapObject.title +'</span>';
  // $(".ico-add-location").css("display","block");
});

$("a[title='JavaScript charts']").remove();

$(".icon-close-map").click(function(){
  $("#chose-map").css("display","none");
  $(".bg-modal").css("display","none");
});
$(".ico-location").click(function(){
  $("#chose-map").css("display","block");
  $(".bg-modal").css("display","block");
});


$(".month_year").datepicker();
