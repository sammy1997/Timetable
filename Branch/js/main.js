$(document).ready(function(){
  $(".dropdownbox").click(function(){
    $(".menu").toggleClass("showMenu");
      $(".menu > li").click(function(){
        $(".dropdownbox > p").text($(this).text());
        $(".menu").removeClass("showMenu");
      });
  });
  
});