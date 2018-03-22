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

    // if(interest === "baking" || interest === "skiing" && color === "yellow" && stress === "ok" ) {
    //   $("#r2").show();
    // } else if (interest === "world-domination" || interest === "skiing" && color === "green" && transport === "portal") {
    //   $("#r1").show();
    // } else if (interest === "world-domination" || interest === "baking" && color === "purple" && transport === "portal") {
    //   $("#r3").show();
    // } else if (interest === "world-domination" && transport === "spaceship" && stressTest ===  "ok") {
    //   $("#r5").show();
    // } else if (interest === "skiing" && transport === "idk" || transport === "spaceship" && stressTest === "breakdown")
    //   $("#r6").show();
    // } else {
    //   $("#r4").show();
    // }
  event.preventDefault();
  });

});
