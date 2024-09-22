// Initialize the todo list and score
const todoList = [];
let score = 0;

// Function to add a new todo item
function addTodoItem() {
  const todoInput = document.getElementById('todo-input');
  const todoText = todoInput.value.trim();
  
  if (todoText) {
    const newTodoItem = { text: todoText, completed: false };
    todoList.push(newTodoItem);
    todoInput.value = '';
    
    // Update the UI
    const todoListItems = document.getElementById('todo-list-items');
    todoListItems.innerHTML += `<li>${newTodoItem.text} <button class="complete-btn">Complete</button></li>`;
    
    // Update the score
    score++;
    document.getElementById('score').textContent = score.toString();
    
    // Add event listener to complete button
    const completeBtns = document.querySelectorAll('.complete-btn');
    completeBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const todoItem = todoList.find((item) => item.text === btn.parentNode.textContent);
        if (todoItem) {
          todoItem.completed = true;
          updateTodoListUI();
        }
      });
    });
    
    // Update the UI after completing a task
    function updateTodoListUI() {
      const todoListItems = document.getElementById('todo-list-items');
      todoListItems.innerHTML = '';
      todoList.forEach((item) => {
        if (item.completed) {
          todoListItems.innerHTML += `<li style="text-decoration: line-through;">${item.text}</li>`;
        } else {
          todoListItems.innerHTML += `<li>${item.text} <button class="complete-btn">Complete</button></li>`;
        }
      });
    }
    
    // Update the score after completing a task
    function updateScore() {
      score--;
      document.getElementById('score').textContent = score.toString();
    }
    
    // Update the score when a task is completed
    updateScore();
    
    // Add event listener to remove button
    const removeBtns = document.querySelectorAll('.remove-btn');
    removeBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const todoItem = todoList.find((item) => item.text === btn.parentNode.textContent);
        if (todoItem) {
          todoList.splice(todoList.indexOf(todoItem), 1);
          updateTodoListUI();
          updateScore();
        }
      });
    });
    
    // Update the score when a task is removed
    function updateScore() {
      score--;
      document.getElementById('score').textContent = score.toString();
    }
    
    // Update the score when a task is completed
    updateScore();
    