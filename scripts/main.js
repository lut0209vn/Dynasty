'use strict';
$(".navbar-toggle").click(function(){
  $(".nav-mobile").stop().slideToggle();
});
if( $(window).width()> 992){
  $(".nav-mobile").css("display","none");
}
// ratting
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

// slider ranger
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

//slider homepage
$('.md-slider-1').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  arrows: true,
  speed: 700,
  dots: false,
  infinite: true,
  autoplay:true,
  autoplaySpeed:3000,
  responsive: [

    {
      breakpoint: 1100,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
        infinite: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
        infinite: true
      }
    },
    {
      breakpoint: 700,
      settings: {
        arrows: false,
        centerPadding: '0px',
        centerMode: true,
        slidesToShow: 2,
        infinite: true,
        dots:true
      }
    },
    {
      breakpoint:699,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 1,
        infinite: true,
        dots:true
      }
    }
  ]
});
