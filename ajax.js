



$(document).ready(function() {


 $("#ajax-root").click(function(){
     $.ajax({
         url: 'http://first-ajax-api.herokuapp.com/',
         method: 'GET' ,
         data: {} ,
         dataType: 'text'
     });

 });


 $("#ajax-ping-pong").click(function(){
     $.ajax({
         url: 'http://first-ajax-api.herokuapp.com/ping',
         method: 'GET' ,
         data: {} ,
         dataType: 'text'
     }).done(function(responseData){
         console.log(responseData);
         $("#step3456").append(responseData);

     });

 });
  /* Your code goes here */

});
