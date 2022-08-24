// This is to fetch the data from a txt form
//Grab the button and add event
//Create tge fetch statement
// test and modify
let btn = document.getElementById("but_n");
const rand_quotes = document.getElementById("rand_q");
rand_quotes.addEventListener("click", () => {
  btn.addEventListener("click", () => {
  fetch("random.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let ArabicText = document.getElementById("Arabic_quote");
      let EnglishText = document.getElementById("English_quote");
      let citation = document.getElementById("cit_ion")
      let randomNum = Math.floor(Math.random() * data.length);
      let item = data[randomNum];
        ArabicText.innerHTML = `${item.Arabic}`;
        EnglishText.innerHTML = `${item.English}`
        citation.innerHTML = `${item.citation}, ${item.year}`
      })


      runAnimate();
    });
})



function runAnimate() {
  let ArabicText = document.getElementById("Arabic_quote");
  let EnglishText = document.getElementById("English_quote");

  EnglishText.classList.add("tracking-in-expand-fwd");
  ArabicText.classList.add("tracking-in-expand-fwd");
}

// Dev/ rel quotes, click on the dev button, fetch dev quotes, randomly generate them, test

const relQuotes = document.getElementById("rel_q")
relQuotes.addEventListener('click', () => {
  
  btn.addEventListener("click", () => {
  fetch("rel.json")
    .then((res) => {
      return res.json()
    }).then((data) => {
      let ArabicText = document.getElementById("Arabic_quote");
      let EnglishText = document.getElementById("English_quote");
      let citation = document.getElementById("cit_ion")
      let randomNum = Math.floor(Math.random() * data.length);
      let item = data[randomNum];
        ArabicText.innerHTML = `${item.Arabic}`;
        EnglishText.innerHTML = `${item.English}`
        citation.innerHTML = `${item.citation}, ${item.year}`

        runAnimate();
      })

    })
})

const devQuotes = document.getElementById("dev_q")
devQuotes.addEventListener('click', () => {
  btn.addEventListener("click", () => {
  fetch("dev.json")
    .then((res) => {
      return res.json()
    }).then((data) => {
      console.log(data)
      let ArabicText = document.getElementById("Arabic_quote");
      let EnglishText = document.getElementById("English_quote");
      let citation = document.getElementById("cit_ion")
      let randomNum = Math.floor(Math.random() * data.length);
      let item = data[randomNum];
        ArabicText.innerHTML = "",
        EnglishText.innerHTML = `${item.English}`
        citation.innerHTML = `${item.citation}, ${item.year}`
        runAnimate();
      })

    })
})