



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
         url: 'http://first-ajax-api.herokuapp.com/pong',
         method: 'GET' ,
         data: {} ,
         dataType: 'text'
     }).done(function(responseData){
         console.log(responseData);
         $("#step3456").append(responseData);
     }).fail(function(){
         console.log("Sorry, your request has failed!");
          $("#step3456").append("Sorry, your request has failed!");
     }).always(function(){
         console.log("Hey the request finished!")
     });

 });

 $("#ajax-count").click(function(){
     $.ajax({
         url: 'http://first-ajax-api.herokuapp.com/count',
         method: 'GET' ,
         data: {} ,
         dataType: 'text'
     }).done(function(responseData){
         console.log(responseData);
         $("#step7").append(responseData);
     });

 });

 $("#ajax-time").click(function(){
     $.ajax({
         url: 'http://first-ajax-api.herokuapp.com/time',
         method: 'GET' ,
         data: {timezone: 'Asia/Kolkata'} ,
         dataType: 'text'
     }).done(function(responseData){
         console.log(responseData);
         $("#step8").append(responseData);
     })

 });
 $("#ajax-car").click(function(){
     $.ajax({
         url: 'http://first-ajax-api.herokuapp.com/a_car',
         method: 'GET' ,
         data: {} ,
         dataType: 'html'
     }).done(function(responseData){
         console.log(responseData);
         $("#step9").append(responseData);
         $('#response').append(respnseData)
     })

 });


  /* Your code goes here */

});
