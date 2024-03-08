const addtaskBtn = document.querySelector(".js-addtaskBtn");

const todoList = document.querySelector(".js-todoList");
const taskInput = document.querySelector(".js-taskInput");

addtaskBtn.addEventListener("click", () => {
  const task = taskInput.value;

  const newDivElement = document.createElement("div");

  addTasks(task, newDivElement);
});

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("js-checkTask") || e.target.tagName === 'svg') {
    const taskElem = e.target.parentElement.closest('div').firstChild;
    taskElem.classList.toggle("taskCompletion");
  }
  else if (e.target.classList.contains("js-deleteTask") || e.target.tagName === 'svg') {
    const parentElem = e.target.parentElement.closest('.js-task');
    parentElem.remove();
  }
});

function addTasks(task, newDivElement) {
  //Note : because of whitespaces sometimes it doesn't return the expected element which we want, so we have to remove spaces to get the expected results
  if (todoList.children.length < 10 && task !== "") {
    const tasksHTML = `<input class="task js-task" value="${task}"/>
    <button class="check-task js-checkTask">
    <svg class="check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
    </button>
    
    <button class="remove-task js-deleteTask">
    <svg class="remove" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
    </button>`;

    newDivElement.innerHTML = tasksHTML;
    todoList.appendChild(newDivElement);
    taskInput.value = "";
  } else if (task === "") {
    alert("Please enter your task");
  } else {
    alert("Tasks limit is full");
  }
}

const instructions = document.querySelector(".instructions");
const instructionsLink = document.querySelector(".instructions-link");

instructionsLink.addEventListener("click", () => {
  instructions.classList.remove("close");
  instructions.classList.add("open");
});

const closeInstructions = document.querySelector(".close-icon");

closeInstructions.addEventListener("click", () => {
  instructions.classList.remove("open");
  instructions.classList.add("close");
});

//Note:
//Always use the element which we have to add classList, using only classList.add() will not work e.g. elementName.classList.add();