$(document).ready(function () {
    $(".mobile-nav").hide();
    $("#menu-mobile-humburger").click(function () {
      $(".mobile-nav").toggleClass("mobile-nav-active");
      $(".mobile-nav").show();
      if ($(".mobile-nav").hasClass("mobile-nav-active")) {
        $("#menu-mobile-humburger").removeClass("fas fa-bars");
        $("#menu-mobile-humburger").addClass("fas fa-times");
      } else {
        $("#menu-mobile-humburger").removeClass("fas fa-times");
        $("#menu-mobile-humburger").addClass("fas fa-bars");
        $(".mobile-nav").hide();
      }
    });
  });
  $(document).ready(function () {
    $('.home-hero').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    });
  
  
    $('.my-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      speed: 2000,
      infinite: true,
      autoplaySpeed: 1000,
      autoplay: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
    /// Get the modal and image elements
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeModal = document.getElementById("closeModal");
  
    // Get all grid items
    const gridItems = document.querySelectorAll(".grid-item img");
  
    // Add click event listeners to open the modal
    gridItems.forEach((item) => {
      item.addEventListener("click", () => {
        modal.style.display = "block";
        modalImage.src = item.src;
      });
    });
  
    // Close the modal when the close button is clicked
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Close the modal when the user clicks anywhere outside the modal
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  