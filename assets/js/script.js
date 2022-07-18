let btns = document.querySelectorAll(".containerBtns__btn-rating");
let btnSubmit = document.querySelector(".btn__submit");
let output = document.querySelector(".containerState__paragraph");

function valueBtn(btn) {
  output.innerHTML = `You selected ${btn} out of 5`;
}

function verificar() {
  console.log(output.innerHTML);
  return output.innerHTML;
}

btnSubmit.addEventListener("click", () => {
  console.log(verificar());
  if (!verificar()) {
    alert("Please select a rating");
  } else {
    document.querySelector(".containerState").style.display = "flex";
    document.querySelector(".containerRating").style.display = "none";
  }
});

btns.forEach((btn) => {
  let clidado = 0;
  btn.addEventListener("click", () => {
    btn.focus();
    valueBtn(btn.value);
    clidado = btn.value;
  });

  if (clidado > 0) {
    valueBtn(clidado);
  }
});
