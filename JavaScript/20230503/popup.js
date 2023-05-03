const article = document.querySelector(".popup");
const openBtn = document.querySelector(".btn-open");
const closeBtn = article.querySelector(".btn-close");
const dim = document.querySelector(".dim");

// 첫번째 포커스 요소 
const firstEl = article.querySelector("a");
const firstEl2 = article.querySelectorAll("a");
console.log(firstEl, firstEl2);

function openPopup() {
  article.classList.add("active");
  firstEl.focus();
}

function closePopup() {
  article.classList.remove("active");
}

openBtn.addEventListener("click", openPopup);
closeBtn.addEventListener('click', closePopup);
closeBtn.addEventListener("keydown", function (e) {
  // 내가 누르고 있는 키 정보를 알려줌
  // console.log(e.key);
  // tab만 눌렀을 떄(shift+tab일땐 실행되지 않음음)
  if(!e.shiftKey && e.key === 'Tab') {
    // console.log("tab만 누름")
    e.preventDefault();
    firstEl.focus();
  }
});

firstEl.addEventListener("keydown", function (e) {
   // Shift+tab 같이 눌렀을 때 실행
  if (e.shiftKey && e.key === "Tab") {
    // console.log("shift + tab");
    e.preventDefault();
    closeBtn.focus();
  }
});

dim.addEventListener("click", closePopup);
