let score = 0;

$("#start").click(function() {
  score = 0;
  $("#score").text(score);
  $("#gameArea").empty();

  for (let i = 0; i < 8; i++) {
    createBalloon();
  }
});




function createBalloon(balloon.css({
  background: randomColor,
  left: Math.random() * 830 + "px"
});
) {
  let colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink"];

  let randomColor = colors[Math.floor(Math.random() * colors.length)];

  let balloon = $("<div></div>");

  balloon.addClass("balloon");

  balloon.css({
    background: randomColor
  } balloon.click(function() {
  $(this).stop();
  $(this).fadeOut();
});
);

  $("#gameArea").append balloon.animate({
  bottom: "600px"
}, 4000);
(balloon);
}

function createBalloon() {
  let balloon = $("<div></div>");

  balloon.addClass("balloon");

  $("#gameArea").append(balloon);
}
