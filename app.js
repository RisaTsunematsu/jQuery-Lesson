//"box1タグ内のcssを、 'background-color': '#0000FF','height': '100px'で書き換えなさい"という意味
$(function (){
  $('.box1').slideDown(function (){
   $('.box1').css({
     'background-color': '#0000FF',
     'height': '200px',
     'width': '100px'
   }).slideUp();
  });
});