 

$(document).ready(function(){ 

  

$("p").on("click",function(){ 

$(this).hide() 

}); 

  

}) 

 

$(document).ready(function(){ 

$("body").append('<div>This is a welcome message</div>') 

}) 

$(document).ready(function(){ 

$("body").append('<div class = "hello">asda</div>') 

}) 

$(document).ready(function(){ 

$("body").append('<div class = "hello">sda</div>') 

}) 

$(document).ready(function(){ 

$(".hello").css('background-color','yellow') 

}) 

$(document).ready(function(){ 

$("button").eq(0).click(function(){ 

$(".hello").toggle() 

}) 

}) 

$(document).ready(function(){ 

$("body").append('<div id = "xyz"></div>') 

}) 

$(document).ready(function(){ 

$("button").eq(0).click(function(){ 

$("#xyz").text("Johan") 

}) 

}) 
