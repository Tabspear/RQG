// This is to fetch the data from a txt form
//Grab the button and add event
//Create tge fetch statement
// test and modify
let btn = document.getElementById("but_n");
btn.addEventListener("click", () => {
  fetch("random.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let ArabicText = document.getElementById("Arabic_quote");
      let EnglishText = document.getElementById("English_quote");
      let randomNum = Math.floor(Math.random() * data.length);
      let item = data[randomNum];

      ArabicText.innerHTML = `${item.Arabic}`;
      EnglishText.innerHTML = `${item.English}`;
    });
});
