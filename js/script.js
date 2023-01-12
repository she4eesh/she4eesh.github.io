const mapButton = document.querySelector(".map");
const map = document.querySelector(".mapc");
const footer = document.querySelector(".footer");
const docs = document.querySelector(".docs__doc");

let isOpen = false;

mapButton.addEventListener("click", () => {
  map.classList.toggle("hidden");
  footer.style.marginTop = `${isOpen ? "0px" : "600px"}`;
  isOpen = !isOpen;
});
$(function () {
  $(".map").click(function () {
    $("html, body").animate(
      { scrollTop: $(document).height() - $(window).height() },
      600
    );
    return false;
  });
});
