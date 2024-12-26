const user = {
  name: "Heshan",
  age: 22,
};

const todoCreateButton = document.querySelector(".todo__create__button");
const todoInput = document.querySelector(".todo__input");
const todoContainer = document.querySelector(".todo__container");

// Function to update current date n time when the app is loaded
const updateGreeting = () => {
  const date = new Date();
  const containerTime = document.querySelector(".container__header__time");
  const containerDate = document.querySelector(".container__header__date");
  const containerGreeting = document.querySelector(".container__header__greeting");

  const formattedTime = date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  const formattedDate = date.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "long", year: "numeric" }).replace(/,/, '').replace(/(\d+)/, (day) => {
    const suffix = day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
          ? "rd"
          : "th";
    return `${day}${suffix}`;
  });

  const greeting = date.getHours() < 12 ? "Good Morning" : date.getHours() < 18 ? "Good Afternoon" : "Good Evening";

  containerGreeting.textContent = `${greeting}, ${user.name} 👋`;
  containerTime.textContent = formattedTime;
  containerDate.textContent = `Today, ${formattedDate}`;
};

updateGreeting();
const todoValues = [];

const renderTodos = () => {
  todoContainer.innerHTML = "";
  todoValues.forEach((val, index) => {
    const todoElement = document.createElement("div");
    todoElement.classList.add("todo__item");
    todoElement.id = `todo-${index}`;

    todoElement.innerHTML = `
      <div class="todo__item__left">
        <input type="checkbox" id="completed" name="completed" />
        <span>${val}</span>
      </div>
      <div class="todo__item__right">
        <svg
          class="todo__delete__button"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="red"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-trash"
          data-id="${index}"
        >
          <path d="M3 6h18" />
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>
      </div>
    `;

    const deleteButton = todoElement.querySelector(".todo__delete__button");
    deleteButton.addEventListener("click", () => {
      deleteTodo(index);
    });

    todoContainer.appendChild(todoElement);
  });
};

// Function to delete a todo
const deleteTodo = (index) => {
  todoValues.splice(index, 1);
  renderTodos();
};

todoCreateButton.addEventListener("click", () => {
  const value = todoInput.value.trim();
  if (value === "") {
    return;
  }
  todoValues.push(value);
  todoInput.value = "";
  renderTodos();
});