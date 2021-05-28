const accordion = () => {
  const burger = document.querySelector(".burger");
  const list = document.querySelector(".navigation");

  burger.addEventListener("click", (e) => {
    list.classList.toggle("active");
  });
};

accordion();
