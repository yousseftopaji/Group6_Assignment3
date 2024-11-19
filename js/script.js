$(document).ready(function () {
  // Function to randomly position apples within the crown of the tree
  function positionApplesRandomly() {
    const treeTop = 50; // Adjust based on your tree image
    const treeLeft = 1000; // Adjust based on your tree image
    const treeWidth = 200; // Adjust based on your tree image
    const treeHeight = 200; // Adjust based on your tree image

    $(".apple").each(function () {
      const randomTop = treeTop + Math.random() * treeHeight;
      const randomLeft = treeLeft + Math.random() * treeWidth;
      $(this).css({
        top: randomTop + "px",
        left: randomLeft + "px",
        position: "absolute",
      });
    });
  }

  // Function to move apple to the basket
  function moveToBasket(apple) {
    const basket = $("#basketfront").first();
    const basketOffset = basket.offset();
    const appleOffset = $(apple).offset();
    const dx = basketOffset.left - appleOffset.left;
    const dy = basketOffset.top - appleOffset.top;

    $(apple).animate({ top: "+=" + dy, left: "+=" + dx }, 1000);
  }
  $(".basket").css({
    top: "430px", // Adjust based on your tree image
    left: "800px", // Adjust based on your tree image
    position: "absolute",
  });

  $("#basketfront").css({
    top: "600px", // Adjust based on your tree image
    left: "800px", // Adjust based on your tree image
    position: "absolute",
  });

  $(".isac").css({
    top: "430px", // Adjust based on your tree image
    left: "1px", // Adjust based on your tree image
    position: "absolute",
  });
  function animateIsacVertical() {
    $(".isac").animate({ left: "+=800px" }, 5000);
  }
  animateIsacVertical();

  // Position apples randomly within the crown of the tree on page load
  positionApplesRandomly();

  // Add click event to move apples to the basket
  $(".apple").click(function () {
    moveToBasket(this);
  });
});
