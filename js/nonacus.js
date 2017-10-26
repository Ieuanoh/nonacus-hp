// Scroll animations

$('#who-we-are').css('opacity', 0);

$('#who-we-are').waypoint(function() {
    $('#who-we-are').addClass('fadeIn');
}, { offset: '50%' });

$('#ww-stand-for').css('opacity', 0);

$('#ww-stand-for').waypoint(function() {
    $('#ww-stand-for').addClass('fadeIn');
}, { offset: '50%' });

$('#products-grid').css('opacity', 0);

$('#products-grid').waypoint(function() {
    $('#products-grid').addClass('fadeIn');
}, { offset: '50%' });



// Product dropdowns


$('#product-btn-1').click(function(){
  $('#product-container-1').slideToggle(300);
  $('#product-container-1').siblings().slideUp(200);

});

$('#product-btn-2').click(function(){
  $('#product-container-2').slideToggle(300);
  $('#product-container-2').siblings().slideUp(200);
});

$('#product-btn-3').click(function(){
  $('#product-container-3').slideToggle(300);
  $('#product-container-3').siblings().slideUp(200);
});

// Mobile Product boxes on home page

$('#product-btn-1-mob').click(function(){
  $('#product-container-1-mob').slideToggle(300);
});

$('#product-btn-2-mob').click(function(){
  $('#product-container-2-mob').slideToggle(300);
});

$('#product-btn-3-mob').click(function(){
  $('#product-container-3-mob').slideToggle(300);
});
