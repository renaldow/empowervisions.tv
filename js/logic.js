

$(document).ready(function(){
   $(".anchor").click(function(e){
      $('html, body').animate({
       scrollTop: $($(this).attr('href')).offset().top
      }, 1000);
   });
});


function sampleClicked() {
    document.getElementById("coming-soon").style.display = "block";
}