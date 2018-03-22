$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var name = $("#name").val();
    var age = $("#age").val();
    var interest = $("select#specialInterest").val();
    var color = $("select#color").val();

    if(interest === "baking" || interest === "skiing" && color === "yellow") {
      $("#r2").show();
    } else if (interest === "world-domination" || interest === "skiing" && color === "green") {
      $("#r1").show();
    } else if (interest === "world-domination" || interest === "baking" && color === "purple") {
      $("#r3").show();
    } else {
      $("#r4").show();
    }

    $(".user-name").text(name);
    $(".user-age").text(age);
  event.preventDefault();
  });

});
