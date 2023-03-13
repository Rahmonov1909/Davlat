$(document).ready(function () {
  $('.section_one_box_button').on('click',function(){
      $(this).next().slideToggle(1000);
  })
});

// ================================
$(document).ready(function () {
  $('.section_sex_link a').click(function(event){
  
  event.preventDefault();
  let attr = $(this).attr('href');
  console.log(attr);
  $('.section_sex_active').fadeOut(function(){
      $(this).attr('src',attr).fadeIn();
  })
  })
});