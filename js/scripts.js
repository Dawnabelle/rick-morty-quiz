$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var stress = $("#stressTest").val();
    var transport = $("#transport").val();
    var interest = $("select#specialInterest").val();
    var color = $("select#color").val();

    if (color === "yellow") {
      $("#morty").show();
    } else if (interest === "skiing" && stress === "breakdown" && transport === "spaceShip" && color === "green") {
      $("#jerry").show();
    } else if (stress === "ok" && transport === "spaceship" && color === "green") {
      $("#summer").show();
    } else if (color === "green" && interest === "world-domination") {
      $("#pickleRick").show();
    } else if (interest === "world-domination" && color === "blue" && stress === "great") {
      $("#rick").show();
    } else {
      $("#poopy").show();
    }
    $("button.btn").click(function() {
      $(".character-result").hide();
    });
    $(".survey").detach();
    $(".back").show();
    $(".back").click(function() {
      location.reload(true);
      // $(".survey").append();
      // $(".survey").show();
      // $("#result").detach();
    })
  event.preventDefault();
  });

});
