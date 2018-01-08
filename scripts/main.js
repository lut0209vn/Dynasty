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
select map
========================================================================== */
var map = AmCharts.makeChart("map-chart", {

  "type": "map",
  "theme": "light",

  "dataProvider": {
    "map": "worldLow",
    "getAreasFromMap": true
  },
  "areasSettings": {
    "autoZoom": false,
    "selectedColor": "#CC0000",
    "selectable": true
  }
});

map.addListener("clickMapObject", function(event) {
  document.getElementById("get-info").innerHTML += '<span class="remove" onclick="myFunction()">'+event.mapObject.title +'</span>';
});

    $("a[title='JavaScript charts']").remove();

function myFunction(e){
  $(event.target).remove();
}
