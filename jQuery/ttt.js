let p1Color = "whitesmoke"
let quote = document.querySelector("h3")
started = false
  $("div.tile").click(function colorPicker(){
    started = true
     p1Color = $(this).css("background-color")
     quote.textContent = "Game Started"
     quote.style.color = p1Color

})

$("button").mouseover(function(){
  if (!$(this).hasClass("marked")){
  $(this).css("background-color", p1Color)
}
})
$("button").mouseout(function() {
  if (!$(this).hasClass("marked")){
          $(this).css("background-color", "ivory");
}
      })
$("button").click(function(){
  if (!$(this).hasClass("marked")){
  $(this).addClass("marked")
  $(this).addClass("p1")
  $(this).css("background-color", p1Color)


if (started){
  computerTurn()
  if (check("p1")){
quote.textContent = "You Win!"
quote.style.color = "green"
started = false
  }
  if (check("p2")){
    quote.textContent = "CPU Wins!"
    quote.style.color = "red"
    started = false
  }
}
}
}
)
function computerTurn() {
       let choose = $("button:not(.marked)");
         let randChoice = choose[Math.floor(Math.random() * choose.length)];
         $(randChoice).addClass('marked');
         $(randChoice).addClass('cpu');
         $(randChoice).css("background-color","fuchsia")

    }


function reset(){
   $("button").removeClass("marked");
   $("button").removeClass("p1");
   $("button").removeClass("p2");
   quote.textContent = "Pick a Color for your Circle to the Start the Game!"
   quote.style.color = "White"


   $(".sq1").css("background-color", "ivory");
   $(".sq2").css("background-color", "ivory");
   $(".sq3").css("background-color", "ivory");
   $(".sq4").css("background-color", "ivory");
   $(".sq5").css("background-color", "ivory");
   $(".sq6").css("background-color", "ivory");
   $(".sq7").css("background-color", "ivory");
   $(".sq8").css("background-color", "ivory");
   $(".sq9").css("background-color", "ivory");

}

function check(symbol) {
    if ($(".sq1").hasClass(symbol) &&
        $(".sq2").hasClass(symbol) &&
        $(".sq3").hasClass(symbol))
    {
        $(".sq1").css("background-color", "green");
        $(".sq2").css("background-color", "green");
        $(".sq3").css("background-color", "green");
        return true;
    } else if ($(".sq4").hasClass(symbol)
            && $(".sq5").hasClass(symbol)
            && $(".sq6").hasClass(symbol))
    {
        $(".sq4").css("background-color", "green");
        $(".sq5").css("background-color", "green");
        $(".sq6").css("background-color", "green");
        return true;
    } else if ($(".sq7").hasClass(symbol)
            && $(".sq8").hasClass(symbol)
            && $(".sq9").hasClass(symbol))
    {
        $(".sq7").css("background-color", "green");
        $(".sq8").css("background-color", "green");
        $(".sq9").css("background-color", "green");
        return true;
    } else if ($(".sq1").hasClass(symbol)
            && $(".sq4").hasClass(symbol)
            && $(".sq7").hasClass(symbol))
    {
        $(".sq1").css("background-color", "green");
        $(".sq4").css("background-color", "green");
        $(".sq7").css("background-color", "green");
        return true;
    } else if ($(".sq2").hasClass(symbol)
            && $(".sq5").hasClass(symbol)
            && $(".sq8").hasClass(symbol))
    {
        $(".sq2").css("background-color", "green");
        $(".sq5").css("background-color", "green");
        $(".sq8").css("background-color", "green");
        return true;
    } else if ($(".sq3").hasClass(symbol)
            && $(".sq6").hasClass(symbol)
            && $(".sq9").hasClass(symbol))
    {
        $(".sq3").css("background-color", "green");
        $(".sq6").css("background-color", "green");
        $(".sq9").css("background-color", "green");
        return true;
    } else if ($(".sq1").hasClass(symbol)
            && $(".sq5").hasClass(symbol)
            && $(".sq9").hasClass(symbol))
    {
        $(".sq1").css("background-color", "green");
        $(".sq5").css("background-color", "green");
        $(".sq9").css("background-color", "green");
        return true;
    } else if ($(".sq3").hasClass(symbol)
            && $(".sq5").hasClass(symbol)
            && $(".sq7").hasClass(symbol))
    {
        $(".sq3").css("background-color", "green");
        $(".sq5").css("background-color", "green");
        $(".sq7").css("background-color", "green");
        return true;
    } else {
        return false;
    }
  }
