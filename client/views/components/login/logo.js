
$(document).ready(function(){ 
var foodItems = ['ketchup-mustard', 'salt-pepper', 'plate', 'pizza', 'meat', 'soda', 'fork', 'beer', 'fish', 'burger', 'drink', 'onion', 'orange', 'pot', 'oven', 'pear'];
var test = $('.meat');  
  
var ctnt = "Savor"; // Your text goes here 
var speed = 60; // ms per frame  
var increment = 10; // frames per step. Must be >2  

    
var clen = ctnt.length;        
var si = 0;
var stri = 0;  
var block = "";
var $block = $('<svg height="40px" width="40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"></svg>');
  $('body').append($block);
var fixed = "";
//Call self x times, whole function wrapped in setTimeout
(function rustle (i) {          
setTimeout(function () {
  if (--i){
    rustle(i); 
  } else {
    // $block.empty();
    $block = $('.plate');
    $block.css('position', 'absolute'); 
    $block.css('width', '50px');
    $block.css('margin-top', '35px');  
    
    
    
    
    // $('path').css('fill', '#fff'); 
  }  
  nextFrame(i);
  si = si + 1;
}, speed);
})(clen*increment+1);   
function nextFrame(pos){
  for (var i=0; i<clen-stri; i++) {
    var rnd = Math.floor(foodItems.length * Math.random());
    var food = $('.' + foodItems[rnd]).clone(); 
    $block.empty();
    $block.append(food);
  }
  if (si == (increment-1)){ 
    stri++;
  }
  if (si == increment){ 
  // Add a letter; 
  // every speed*10 ms
  fixed = fixed +  ctnt.charAt(stri - 1);
    si = 0;
  }
  $("#output").html(fixed).append($block);
} 
});  

