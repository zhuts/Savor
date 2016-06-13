// console.log('loaded');
// var $grid = $('.grid').masonry({
//   itemSelector: '.grid-item',
//   columnWidth: 20
// });

// $grid.on( 'click', '.grid-item', function() {
//   console.log('grid item clicked');
//   // change size of item via class
//   $( this ).toggleClass('grid-item--gigante');
//   // trigger layout
//   $grid.masonry();
// });

// var count = $grid.children().length;

// $(document).ready(function() {
//   console.log('ready');
// });


// $('.new-grid-items').bind("DOMNodeInserted",function(e){
  // console.log(e.target);
  // console.log($('img', e.target).attr('src'));
  // $("ul").find("span").css({"color": "red", "border": "2px solid red"});


  // if ($grid.children().length === count) {
  //   console.log('apppppppended', $(e.target));
  //   $grid.prepend($(e.target)).masonry( 'prepended', e.target, true );
  // }

  // if ($grid.children().last() === e.target) {
  //   count++;
  // }


  // if (!$grid.find($(e.target).children().attr('src'))) {
  // }
  // if ($(e.target).hasClass('grid-item')) {
    
  //   console.log('apppppppended', $(e.target));
  //   $grid.prepend($(e.target)).masonry( 'prepended', e.target, true );
  // }
  // $grid.masonry()
  //   .append( e.target )
  //   .masonry( 'appended', e.target )
  //   .masonry();
// });