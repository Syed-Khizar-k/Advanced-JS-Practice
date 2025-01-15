let carosal = document.querySelector(".inner-curosal");
let items = document.querySelectorAll(".inner-items");
let prevButton = document.querySelector(".btn-previous");
let nextButton = document.querySelector(".btn-next");
let dots = document.querySelectorAll(".dot");

let interval = 3000; //3 seconds for images changing
let index = 0;

function update() {
  offset = -index * 100;
  items.forEach((item) => {
    item.style.transform = `translateX(${offset}%)`;
  });

  // Update the active dot
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

nextButton.addEventListener("click", () => {
  index = (index + 1) % items.length;
  update();
});

prevButton.addEventListener("click", () => {
  index = (index - 1 + items.length) % items.length;
  update();
});

//automatic iamges sliding function
function automate() {
  index++;
  if (index >= items.length) {
    index = 0;
  }
  items.forEach((item) => {
    item.style.transform = `translateX(-${index * 100}% )`;
  });
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}
//timeinterval function to call the automate() after 2 sec
setInterval(automate, interval);
