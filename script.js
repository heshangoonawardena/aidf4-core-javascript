const todoForm = document.querySelector(".todo-app__form");
const todoInput = document.querySelector(".todo-app__input");
const todoList = document.querySelector(".todo-app__list");

let todos = [];

const renderTodos = () => {
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
    todoList.appendChild(todoItem);
  });
};

const addTodo = (text) => {
  const newTodo = {
    id: todos.length + 1,
    text: text,
    completed: false,
  };
  todos.push(newTodo);
  console.log(todos);
  renderTodos();
};

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = todoInput.value;
  addTodo(text);
  todoInput.value = "";
});

const updateGreeting = () => {
  const greetingElement = document.querySelector(".todo-app__title");
  const hour = new Date().getHours();
  let greeting = "Good Evening";
  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  }
  greetingElement.textContent = greeting + ", Manupa 👋";
};

updateGreeting();
// renderTodos();

// console.log("Welcome to the program!");

// const manupa = {
//   name: "Manupa",
//   age: 23,
//   isStudent: false,
// };

// const dilshara = {
//   name: "Dilshara",
//   age: 23,
//   isStudent: false,
// };

// console.log(manupa);

// const name = "Manupa";
// const age = 23;
// const isStudent = false;

// string, number, boolean
// console.log(name, age);

// function greet() {
//   console.log("Hello, my name is " + "Manupa" + ", I am " + 23 + " years old.");
// }

// const greet = (name, age) => {
//   console.log("Hello, my name is " + name + ", I am " + age + " years old.");
// };

// greet(name, age);

// const add = (a, b) => {
//   return a + b;
// };

// const val = add(age, 5);
// console.log(val);

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers);

// const twiceNumbers = numbers.map((number) => {
//   return number * 2;
// });

// console.log(twiceNumbers);
