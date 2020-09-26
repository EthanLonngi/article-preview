const $shareIcon = document.querySelector(".share__icon");
const $shareContent = document.querySelector(".share");
const $info = document.querySelector(".info");
const $shareColor = document.querySelector(".share__button");

$shareIcon.addEventListener("click", () => {
  $shareIcon.classList.toggle("share__icon--active");
  $shareContent.classList.toggle("share--active");
  $info.classList.toggle("info--active");
  $shareColor.classList.toggle("share__button--active");
});
