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
slider  home page
========================================================================== */
$('.slider1').owlCarousel({
  stagePadding: 150,
  smartSpeed:700,
  loop:true,
  margin:10,
  nav:false,
  items:1,
  nav:true,
  responsive : {
  0 : {
    stagePadding: 50,
  },
  480 : {
    stagePadding: 70,
  },
  768 : {
    stagePadding: 90,
  }
}
});
$('.slider2').owlCarousel({
    stagePadding: 150,
    smartSpeed:300,
    loop:true,
    margin:10,
    nav:false,
    items:1,
    dots: true,
    responsive : {
    0 : {
      stagePadding: 50,
    },
    480 : {
      stagePadding: 70,
    },
    768 : {
      stagePadding: 90,
    }
  }
});
$('.slider3').owlCarousel({
  stagePadding: 60,
  smartSpeed:370,
  loop:true,
  margin:10,
  nav:false,
  items:3,
  nav:true,
  responsive : {
  0 : {
    stagePadding: 50,
    items:2,
  },
  480 : {
    stagePadding: 40,
    items:2,
  },
  768 : {
    stagePadding: 50,
    items:2,
  },
  992 : {
    stagePadding: 90,
    items:3,
    stagePadding: 50,
  },
  1150 : {
    stagePadding: 90,
    items:3,
  }
}
});

/* ==========================================================================
select map
========================================================================== */
$(".chosen-select-no-results1").chosen();
$(".chosen-select-map").chosen().change(function(){
  var ctn=$('li.search-choice').length;
  $('#get-info .chosen-select-map li.search-choice div').remove();
  $('#get-info li.search-choice div').remove();
  $('#get-info li.search-choice').last().append('<div></div>');
  $("#get-info .search-choice-close").click(function(){
    $('#get-info li.search-choice').last().append('<div></div>');
  });
  $("#get-info .chosen-choices").click(function(){
    if($('#get-info li.search-choice').length==2){
      alert("is not chose more 2 item");
    }
  });
  if($('#get-info li.search-choice').length>0){
    $("#get-info .chosen-search-input").show();
  }else{
    $("#get-info .chosen-search-input").show();
  }
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

var content = [
  { title: 'Andorra <span>1 tour package</span>' },
  { title: 'United Arab Emirates'  },
  { title: 'Afghanistan  <span>aa</span>' },
  { title: 'Antigua' },
  { title: 'Anguilla' },
  { title: 'Albania' },
  { title: 'Armenia' },
  { title: 'Netherlands Antilles' },
  { title: 'Angola' },
  { title: 'Argentina' },
  { title: 'American Samoa' },
  { title: 'Austria' },
  { title: 'Australia' },
  { title: 'Aruba' },
  { title: 'Aland Islands' },
  { title: 'Azerbaijan' },
  { title: 'Bosnia' },
  { title: 'Barbados' },
  { title: 'Bangladesh' },
  { title: 'Belgium' },
  { title: 'Burkina Faso' },
  { title: 'Bulgaria' },
  { title: 'Bahrain' },
  { title: 'Burundi' }
  // etc
];
$('.ui.search')
  .search({
    source: content
  })
;
