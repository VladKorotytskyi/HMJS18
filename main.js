//1
document.addEventListener("change", (event) => {
    if (event.target.name === "color") {
      document.body.style.backgroundColor = event.target.value;
    }
  });

//2
const inputEl = document.querySelector("input");
const spanEl = document.querySelector("span");
inputEl.addEventListener("input", (event) => {
  console.log(event.currentTarget.value);
  spanEl.textContent = event.currentTarget.value;
});

const inpurBc = document.querySelector("#validation-input");
inpurBc.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === 6) {
    event.currentTarget.style.borderColor = "green";
  } else {
    event.currentTarget.style.borderColor = "red";
  }
});

//3
const textEl = document.querySelector('#text');
const inputRange = document.querySelector('#font-size-control');
inputRange.addEventListener('input', ()=>{
    textEl.style.fontSize = inputRange.value + 'px'
});
