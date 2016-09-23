function openBlock (id) {
  console.log("chacha")
    var block = document.getElementById(id);
    var blocks = document.getElementById("main_content").getElementsByTagName("div");

    for (var y = 0; y < blocks.length; y++) {
        blocks[y].style.display = "none";
    }
    block.style.display = "block";

    $( "li" ).click(function() {
        console.log("chooch");
        console.log( this );
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


// TODO: set up the tooltip plugin on all of the links in the menu
$('#menu a').tooltip();
