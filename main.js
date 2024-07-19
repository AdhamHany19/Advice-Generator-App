let genbtn = document.querySelector(".dice");
let advice = document.querySelector(".advice p");
let id = document.querySelector(".num h4");
function advicegen() {
  fetch("https://api.adviceslip.com/advice")
    .then((Response) => {
      return Response.json();
    })
    .then((advicedata) => {
      const advictext = advicedata.slip.advice;
      const adviceid = advicedata.slip.id;
      advice.innerHTML = `${advictext}`;
      id.innerHTML = `ADVICE #${adviceid}`;
    })
    .catch((error) => {
      console.error(`Error fetching advice`, error);
    });
}
genbtn.addEventListener("click", advicegen);
