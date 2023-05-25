//"box1タグ内のcssを、 'background-color': '#0000FF','height': '100px'で書き換えなさい"という意味
$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});