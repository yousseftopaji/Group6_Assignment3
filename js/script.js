//MAKE THE MAGIC HAPPEN

// when the user click on the watering can , it rotates 30 degrees to the left, and if click again it rotates back to the original position
let rotated = false;
let hide = true;
$(".waterdrop").hide();

function showWaterDrop(hide) {
  if (hide) {
    $(".waterdrop").hide();
  } else {
    $(".waterdrop").show();
  }
}

$("#wateringcan").click(function () {
  if (rotated) {
    $(this).css("transform", "rotate(0deg)");
    showWaterDrop(hide);
  } else {
    $(this).css("transform", "rotate(-30deg)");
    showWaterDrop(!hide);
  }
  rotated = !rotated;
});

let net = $("#net");
// I want the net to follow the cursor
$(document).mousemove(function (event) {
  net.css({ left: event.pageX, top: event.pageY });
});

let tree = $("#tree");
// I want the tree behind the net
tree.css("z-index", "-1");

// I want the apples to stand on the tree
let apples = $(".apple");
apples.css("position", "absolute");
apples.css("z-index", "1");
apple1 = $("#apple1");
apple2 = $("#apple2");
apple3 = $("#apple3");

apples.mouseover(function () {
  $(this).animate({ top: "90%", left: "22%" }, 1500);
});
