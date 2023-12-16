$(document).ready(function() {
    console.log("ready!");

    $("#go").click(function(event){
        event.preventDefault();
        var fn = $("#fname").val();
        var ln = $("#lname").val();
        $("#jumbotron").text(fn + ' ' + ln);
      });
});
