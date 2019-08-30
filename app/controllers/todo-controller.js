import TodoService from "../services/todo-service.js";

const _todoService = new TodoService()

//TODO Create the render function
function _drawTodos() {
	let todos = _todoService.ToDo
	let template = ''
	todos.forEach(t => template += t.Template)
	document.getElementById('todo-cards').innerHTML = template
}


//NOTE Keep an eye on your console for any of these errors
function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
}


export default class TodoController {
	constructor() {
		//TODO Remember to register your subscribers
		_todoService.addSubscriber('error', _drawError)
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.getTodos()
	}

	addTodo(event) {
		event.preventDefault()
		var form = event.target
		var todo = {
			//TODO build the todo object from the data that comes into this method
			description: form.description.value
		}
		_todoService.addTodo(todo)
	}

	//NOTE This method will pass an Id to your service for the TODO that will need to be toggled
	toggleTodoStatus(todoId) {
		_todoService.toggleTodoStatus(todoId)
	}

	//NOTE This method will pass an Id to your service for the TODO that will need to be deleted
	removeTodo(todoId) {
		_todoService.removeTodo(todoId)
	}

}
