const sendMsgBtn = document.querySelector("#send-btn");
const message = document.querySelector(".msg");

sendMsgBtn.addEventListener("click", sendMsg);

const outgoingMsg = document.querySelector(".outgoing");

function sendMsg() {
  const textVal = message.value;
  const p = document.createElement("p");
  p.innerText = textVal;
  outgoingMsg.appendChild(p);
}
