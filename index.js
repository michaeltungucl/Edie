const accordion = () => {
  const burger = document.querySelector(".burger");
  const list = document.querySelector(".header__mobile");

  burger.addEventListener("click", () => {
    if (list.style.display === "flex") {
      list.style.display = "none";
    } else {
      list.style.display = "flex";
    }
  });
};

accordion();
