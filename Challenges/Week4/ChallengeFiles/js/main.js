function openBlock (id) {
    var block = document.getElementById(id);
    var blocks = document.getElementById("main_content").getElementsByTagName("div");

    for (var y = 0; y < blocks.length; y++) {
        blocks[y].style.display = "none";
    }
    block.style.display = "block";

    $( "li" ).click(function() {
        $("li").removeClass("active");    // remove active class from clicked menu item
        $( this ).addClass("active");
    });

}

$("li").hover(
  function() {
    $(this).addClass("hover");     // add hover class to menu item
  }, function() {
    $(this).removeClass("hover");   // remove hover class when pointer leaves
  }
);


$('#menu a').tooltip({        //select menu links for tooltip
  title: "fancy tooltip",     //tooltip plugin options
  delay: 1000
});
