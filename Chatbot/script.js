const sendChatBtn = document.querySelector("#send-btn");
const input = document.querySelector(".chat-input textarea");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");

function createChatLi(message, className) {
  const chatList = document.createElement("li");
  chatList.classList.add("chat", className);
  let chatContent =
    className === "outgoing"
      ? `<p>${message}</p>`
      : `<span class="material-symbols-outlined">
  smart_toy
  </span>
  <p>${message}</p>`;
  chatList.innerHTML = chatContent;
  return chatList;
}

let userMessage;
function handleChat() {
  userMessage = input.value.trim();
  if (!userMessage) {
    return userMessage;
  }

  chatbox.appendChild(createChatLi(userMessage, "outgoing"));

  setTimeout(() => {
    if (userMessage) {
      chatbox.appendChild(createChatLi("Thinking..", "incoming"));
      generateResponse();
    }
  }, 600);
}

const API_KEY = "s3HM30OhfwPe6yVVBVkOjZK_Df4Qt7Xt";

function generateResponse() {
  const API_URL = `https://api.chatbot.com/users`;

  const requestOptions = {
    request: "GET",
    url: `https://api.chatbot.com/users/:5b7ff847cc3c3fb33c9249a8`,
    header: {
      authorization: `Bearer ${API_KEY}`,
    },
  };

  fetch(API_URL, requestOptions)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

sendChatBtn.addEventListener("click", handleChat);

chatbotToggler.addEventListener("click", () => {
  document.body.classList.toggle("show-chatbot");
});
