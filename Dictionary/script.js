const searchInput = document.querySelector(".js-dictionaryInput");
const searchBtn = document.querySelector(".js-searchBtn");
const getWordInfo = document.querySelector(".wordInfo");

let word = "";
searchBtn.addEventListener("click", () => {
  word = searchInput.value;
  search(word);
});

async function search(word) {
  try {
    const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const response = await fetch(URL);
    const data = await response.json();

    let partOfSpeechVerb =
      data[0].meanings[1] === undefined
        ? "Not Found"
        : data[0].meanings[1].partOfSpeech;
    let definitions = data[0].meanings[0].definitions[0];
    let synonyms =
      data[0].meanings[0].synonyms[0] === undefined
        ? "Not Found"
        : data[0].meanings[0].synonyms[0];

    getWordInfo.innerHTML = `<h2>${data[0].word}</h2>
      <p>noun: ${data[0].meanings[0].partOfSpeech}</p>
      <p>part of speech: ${partOfSpeechVerb}</p>
      <p>Definitions: ${definitions.definition}</p>
      <p>synonyms: ${synonyms}</p>
      <p>antonyms: ${definitions.antonyms}</p>
      <button class="readmore-btn"><a href="https://en.wikipedia.org/wiki/${word}">Read more</a></button>`;

    getWordInfo.style.border = "1px solid #fff";
  } catch (error) {
    getWordInfo.innerHTML = "Sorry, the word could not be found";
  }
}
