document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.querySelector(".todo-app__form");
  const todoInput = document.querySelector(".todo-app__input");
  const todoList = document.querySelector(".todo-app__list");
  const todoStats = document.querySelector(".todo-app__stats");

  let todos = [];

  function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach((todo) => {
      const todoItem = document.createElement("div");
      todoItem.className = "todo-app__item";
      todoItem.innerHTML = `
                <input type="checkbox" class="todo-app__checkbox" ${
                  todo.completed ? "checked" : ""
                }>
                <span class="todo-app__text ${
                  todo.completed ? "todo-app__text--completed" : ""
                }">${todo.text}</span>
                <button class="todo-app__delete-button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="todo-app__delete-icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </button>
            `;

      const checkbox = todoItem.querySelector(".todo-app__checkbox");
      checkbox.addEventListener("change", () => toggleTodo(todo.id));

      const deleteButton = todoItem.querySelector(".todo-app__delete-button");
      deleteButton.addEventListener("click", () => deleteTodo(todo.id));

      todoList.appendChild(todoItem);
    });
    updateStats();
  }

  function addTodo(text) {
    const newTodo = {
      id: todos.length + 1,
      text: text,
      completed: false,
    };
    todos.push(newTodo);
    renderTodos();
  }

  function toggleTodo(id) {
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    renderTodos();
  }

  function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
    renderTodos();
  }

  function updateStats() {
    const completedTodos = todos.filter((todo) => todo.completed).length;
    const totalTodos = todos.length;
    todoStats.textContent =
      totalTodos === 0
        ? "No tasks yet. Add one to get started!"
        : `${completedTodos} of ${totalTodos} tasks completed`;
  }

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = todoInput.value.trim();
    if (text) {
      addTodo(text);
      todoInput.value = "";
    }
  });

  function updateGreeting() {
    const greetingElement = document.querySelector(".todo-app__title");
    const hour = new Date().getHours();
    let greeting = "Good Evening";
    if (hour < 12) greeting = "Good Morning";
    else if (hour < 18) greeting = "Good Afternoon";
    greetingElement.textContent = `${greeting}, Manupa 👋`;
  }

  function updateCurrentDate() {
    const dateElement = document.querySelector(".todo-app__date");
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    dateElement.textContent = new Date().toLocaleDateString("en-US", options);
  }

  updateGreeting();
  updateCurrentDate();
  renderTodos();
});
