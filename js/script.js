// when the user clicks on the watering can, it rotates 30 degrees to the left, and if clicked again it rotates back to the original position
let rotated = false;
$("#wateringcan").click(function () {
  if (rotated) {
    $(this).css("transform", "rotate(0deg)");
  } else {
    $(this).css("transform", "rotate(-30deg)");
  }
  rotated = !rotated;
});

let net = $("#net");
//the net follows the cursor
$(document).mousemove(function (event) {
  net.css({ left: event.pageX, top: event.pageY });
});

let tree = $("#tree");
//the tree behind the net
tree.css("z-index", "-1");

// I want the apples to stand on the tree
let apples = $(".apple");

// the apples are on top of the tree
apples.css("z-index", "1");

// the apples fall in the basket when hovered over.
apples.mouseover(function () {
  $(this).animate({ top: "90%", left: "22%" }, 1500);
});
