// given an api ***  https://stock-api.desaihetav.repl.co/list  ***  and get an list of items. Display id and name of each item in the list following format ID - NAME

const fetchBtn = document.querySelector("#fetchResults");
const result = document.querySelector("#output");

fetchBtn.addEventListener("click", () => {
  let serverURL = "https://stock-api.desaihetav.rpl.co/list";

  fetch(serverURL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.data.map((item) => {
        result.innerHTML = `<li>${item.id}  -  ${item.name}</li>`;
      });
    })
    .catch((err) => {
      result.innerText = "data not found";
    });
});
