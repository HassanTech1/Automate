document.addEventListener("DOMContentLoaded", function () {
  let lazyMedia = [].slice.call(document.querySelectorAll(".lazy-media"));

  if ("IntersectionObserver" in window) {
    let lazyMediaObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const media = entry.target;
          if (media.tagName === "IMG") {
            // Handle lazy loading of GIFs
            media.src = media.dataset.src;
            lazyMediaObserver.unobserve(media);
          } else if (media.tagName === "VIDEO") {
            // Handle lazy loading of videos
            const source = media.querySelector("source");
            if (source && !source.src) {
              // Ensure source doesn't already have a src
              source.src = source.dataset.src;
              media.load(); // Reload video to apply the new source
            }
            lazyMediaObserver.unobserve(media);
          }
          media.classList.remove("lazy-media");
        }
      });
    });

    lazyMedia.forEach((media) => {
      lazyMediaObserver.observe(media);
    });
  } else {
    // Fallback for browsers that do not support Intersection Observer
    lazyMedia.forEach((media) => {
      if (media.tagName === "IMG") {
        media.src = media.dataset.src;
      } else if (media.tagName === "VIDEO") {
        const source = media.querySelector("source");
        source.src = source.dataset.src;
        media.load();
      }
    });
  }
});

var animationStarted = false;
var loadedImages = {}; // Cache for preloaded images
var windowWidth = window.innerWidth;

function preloadImages(totalImages) {
  var loadedCount = 0;

  // Preload and cache all images
  for (let i = 0; i <= totalImages; i++) {
    let img = new Image();
    img.onload = function () {
      loadedImages[i] = img; // Cache image
      loadedCount++;

      // Check if all images are loaded
      if (loadedCount === totalImages + 1) {
        // You can hide your loader here and start the animation
        startAnimation();
      }
    };
    img.src = "/assets/img/cubic-" + i + ".jpg";
  }
}

function startAnimation() {
  if (!animationStarted) {
    animationStarted = true;
    var myCanvas = document.getElementById("myCanvas");
    var ctx = myCanvas.getContext("2d");
    var mainDescription = document.getElementById("main-description");

    function changeImage() {
      var scrollPercentage =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);
      if (windowWidth <= 768) {
        imageIndex = Math.floor(scrollPercentage * 13 * 54);
      } else {
        imageIndex = Math.floor(scrollPercentage * 7 * 54);
      }

      // Use cached image
      if (loadedImages[imageIndex]) {
        ctx.drawImage(loadedImages[imageIndex], 0, 0);
      }

      // Adjust description text opacity
      mainDescription.style.opacity = scrollPercentage * 2 > 0.2 ? 1 : 0;
    }

    window.addEventListener("scroll", function () {
      changeImage();
    });

    changeImage(); // Initial call to display the first image
  }
}

// Example assuming you have 54 images
document.addEventListener("DOMContentLoaded", function () {
  preloadImages(54); // Adjust the number of images to preload
});

// Enhanced cube scaling logic with easing
document.addEventListener("DOMContentLoaded", function () {
  var canvasContainer = document.getElementById("canvas-container");

  function adjustCanvasScale() {
    var scrollPercentage =
      window.scrollY /
      (document.documentElement.scrollHeight / 5 - window.innerHeight);
    var startScale = 0.6;
    var endScale = 0.9;
    // Example of an easing function: EaseInOutQuad
    var scale;
    if (windowWidth <= 768) {
      scale =
        startScale +
        (endScale - startScale) *
          (scrollPercentage < 0.5
            ? 2.2 * scrollPercentage * scrollPercentage
            : -1 + (4.4 - 2.2 * scrollPercentage) * scrollPercentage);
    } else {
      scale =
        startScale +
        (endScale - startScale) *
          (scrollPercentage < 0.5
            ? 2 * scrollPercentage * scrollPercentage
            : -1 + (4 - 2 * scrollPercentage) * scrollPercentage);
    }

    scale = Math.min(Math.max(scale, startScale), endScale);
    canvasContainer.style.transform = `scale(${scale})`;
  }

  window.addEventListener("scroll", adjustCanvasScale);
  adjustCanvasScale(); // Initial call to set scale
});
