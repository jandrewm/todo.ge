var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
  },

  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;

    if (todo.completed === true) {
    document.getElementById('doge').classList.add('dogepop');
    setTimeout(function(){ document.getElementById('doge').classList.remove('dogepop'); }, 5000);
  }
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    this.todos.forEach(function(todo) {
      if (todo.completed === true) {
        completedTodos++;
      }
    });
    
    this.todos.forEach(function(todo) {
    if (completedTodos === totalTodos) {
      todo.completed = false;
    } else {
      todo.completed = true;
      }
    });
  }
};

var handlers = {
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
    buttonCheck();
  },
  deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodos();
    buttonCheck();
  },
  toggleCompleted: function(position) {
  	todoList.toggleCompleted(position);
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }  
};

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('#todolist');
    todosUl.innerHTML = '';
    
    todoList.todos.forEach(function(todo, position) {
      var todoLi = document.createElement('div');
      todoLi.className = 'mdl-cell--3-col-desktop todo-card mdl-card mdl-shadow--2dp mdl-cell';
      var todoTextWithCompletion = '';
        if (todo.completed === true) {
        todoTextWithCompletion = 'Completed';
      } else {
         todoTextWithCompletion = 'To Do';
      }
      var buttonBar = document.createElement('div');
      buttonBar.className = 'mdl-card__actions mdl-card--border text-center';
      
      todoLi.id = position;
      todoLi.appendChild(this.createCompleteStatus(todoTextWithCompletion));
      todoLi.appendChild(this.createTodoTextField(todo.todoText, todoTextWithCompletion));
      
      buttonBar.appendChild(this.createDeleteButton());
      buttonBar.appendChild(this.createCompletedButton());
      todoLi.appendChild(buttonBar);
      
      todosUl.appendChild(todoLi);
    }, this);
  },

  createCompleteStatus: function(status) {
  var completeStatus = document.createElement('div');
  completeStatus.textContent = status;
    if (status === 'Completed') {
      completeStatus.className = 'mdl-card__title todo-title completedstyle';
    } else {
      completeStatus.className = 'mdl-card__title todo-title';
    }
  return completeStatus;
  },

  createTodoTextField: function(text, status) {
  var todoTextField = document.createElement('div');
  todoTextField.textContent = text;
  if (status === 'Completed') {
    todoTextField.className = 'todo-item mdl-card--expand completedtext'
  } else {
    todoTextField.className = 'todo-item mdl-card--expand'
  }

  return todoTextField;

  },
  createDeleteButton: function() {
  var deleteButton = document.createElement('button');
  deleteButton.className = 'mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect';
  deleteButton.id = 'deleteButton';
  var deleteIcon = document.createElement('i');
  deleteIcon.textContent = 'delete_forever';
  deleteIcon.className = 'material-icons';
  deleteButton.appendChild(deleteIcon);
  return deleteButton;
  },

  createCompletedButton: function() {
  var completedButton = document.createElement('button');
  completedButton.className = 'mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect';
  completedButton.id = 'completedButton';
  var completeIcon = document.createElement('i');
  completeIcon.textContent = 'done';
  completeIcon.className = 'material-icons';
  completedButton.appendChild(completeIcon);
  return completedButton;
  },

  setUpEventListeners: function() {
    var todosUl = document.querySelector('#todolist');
    todosUl.addEventListener('click', function(event) {
      var elementClicked = event.target;
      if (elementClicked.parentNode.id === 'deleteButton') {
      handlers.deleteTodo(parseInt(elementClicked.parentNode.parentNode.parentNode.id));  
      }
      else if(elementClicked.parentNode.id === 'completedButton') {
      handlers.toggleCompleted(parseInt(elementClicked.parentNode.parentNode.parentNode.id));
      }
}); 
  }
};

view.setUpEventListeners();

function buttonCheck() {
  var textFieldInput = document.getElementById('addTodoTextInput');
  textCheck = textFieldInput.value
  var toggleCheck = todoList.todos.length
  console.log(textCheck);
  if (textCheck !== ''){
  document.getElementById('addbutton').disabled = false;  
  } else {
  document.getElementById('addbutton').disabled = true;
  }
  if (toggleCheck !== 0){
  document.getElementById('toggleallbutton').disabled = false;
  } else {
  document.getElementById('toggleallbutton').disabled = true;
  }
};

// future releases - save/load array from database