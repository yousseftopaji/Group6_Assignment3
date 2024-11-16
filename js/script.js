//   The Secret Garden - Template by DW
$(document).ready(function () {
  // Net follows the cursor (using jQuery)
  $(document).on("mousemove touchmove", function (event) {
    const x = event.pageX || event.originalEvent.touches[0].pageX; // X position of the cursor
    const y = event.pageY || event.originalEvent.touches[0].pageY; // Y position of the cursor

    // Move the net to the cursor position
    $("#net").css({
      top: y - $("#net").height() / 2,
      left: x - $("#net").width() / 2,
    });
  });

  // Butterfly behavior (using jQuery animations)

  // Move the butterfly to a random position
  function moveButterflyRandomly() {
    const gardenWidth = $(window).width(); // Width of the window
    const gardenHeight = $(window).height(); // Height of the window
    const butterflyWidth = $("#butterfly").width(); // Width of the butterfly
    const butterflyHeight = $("#butterfly").height(); // Height of the butterfly

    let randomX = Math.random() * (gardenWidth - butterflyWidth); // Random X position
    let randomY = Math.random() * (gardenHeight - butterflyHeight); // Random Y position

    $("#butterfly").animate({ top: randomY, left: randomX }, 3000); // Move butterfly to the random position
  }

  setInterval(moveButterflyRandomly, 3000); // Move the butterfly every 3 second

  // Move the butterfly to a random position when the mouse enters it .
  //Width and height of the garden, butterfly, and window
  $("#butterfly").mouseenter(function () {
    const gardenWidth = $(window).width();
    const gardenHeight = $(window).height();
    const butterflyWidth = $(this).width();
    const butterflyHeight = $(this).height();

    // Random X and Y position
    let randomX = Math.random() * (gardenWidth - butterflyWidth);
    let randomY = Math.random() * (gardenHeight - butterflyHeight);

    // Move the butterfly to the random position
    $(this).stop().animate({ top: randomY, left: randomX }, 500);
  });

  // Apples: Random placement and basket behavior (using jQuery animations)
  function placeApples() {
    const tree = $("#tree");
    const treeTop = tree.offset().top;
    const treeLeft = tree.offset().left;
    const treeWidth = tree.width();
    const treeHeight = tree.height() * 0.5; // Only the top half of the tree

    $(".apple").each(function () {
      const randomX = Math.random() * treeWidth + treeLeft;
      const randomY = Math.random() * treeHeight + treeTop;

      $(this).css({ top: randomY, left: randomX });
    });
  }

  placeApples();

  $(".apple").on("click touchstart", function () {
    const basket = $(".basket");
    const basketCenterX = basket.offset().left + basket.width() / 2;
    const basketCenterY = basket.offset().top + basket.height() / 2;

    $(this).css({
      top: basketCenterY,
      left: basketCenterX,
      transform: "scale(0.5)",
    });
  });

  // Watering can and waterdrops behavior (using jQuery animations)
  let isWatering = false;

  $("#wateringcan").on("click touchstart", function () {
    isWatering = !isWatering;

    if (isWatering) {
      $(this).css("transform", "rotate(-30deg)");
      startWatering();
    } else {
      $(this).css("transform", "rotate(0)");
      stopWatering();
    }
  });

  function startWatering() {
    $(".waterdrop").each(function () {
      $(this).css("display", "block");

      const waterDrop = $(this);
      const waterDropLoop = function () {
        const wateringCan = $("#wateringcan");
        const startX = wateringCan.offset().left + wateringCan.width() * 0.8;
        const startY = wateringCan.offset().top + wateringCan.height() * 0.8;

        waterDrop.css({ top: startY, left: startX });

        waterDrop.animate(
          { top: $(window).height() },
          2000,
          "linear",
          waterDropLoop
        );
      };

      waterDropLoop();
    });
  }

  function stopWatering() {
    $(".waterdrop").stop(true).css("display", "none");
  }

  // Day/Night cycle behavior with stars and sun animation (using CSS transitions)

  let isDay = true;

  function toggleDayNight() {
    isDay = !isDay;
    //If it is day, the sky will be blue and the sun will be visible. If it is night, the sky will be dark and the stars will be visible.
    if (isDay) {
      $("#sky").css(
        "background",
        "linear-gradient(to bottom, #87ceeb, #c1f0c1)"
      );
      $("#sun").css({ bottom: "10%", opacity: 1 });
      $("#stars").css("opacity", 0);
    } else {
      $("#sky").css("background", "linear-gradient(to bottom, #1b1b3a, #000)");
      $("#sun").css({ bottom: "-20%", opacity: 0 });
      $("#stars").css("opacity", 1);
    }
  }
  //The day and night cycle will change every 10 seconds.
  setInterval(toggleDayNight, 10000);
});
