const popup = document.querySelector(".popup");
const close = document.querySelector(".close");

window.onload = function () {
  setTimeout(function () {
    popup.style.display = "block";
  }, 4000);
};

close.addEventListener("click", () => {
  popup.style.display = "none";
});

const newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const userEmail = document.getElementById("email").value;

  console.log("Subscribed email: " + userEmail);

  document.getElementById("email").value = "";
});
