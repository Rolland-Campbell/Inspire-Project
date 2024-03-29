//NOTE your service is all set up for the observer pattern but there is still work to be done
import ToDo from "../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/Bud/todos/',
	timeout: 3000
});

let _state = {
	todos: [],
	completed: [],
	error: {},
}

let _subscribers = {
	todos: [],
	error: [],
	completed: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {
	get TodoError() {
		return _state.error
	}

	get Completed() {
		return _state.completed
	}

	get ToDo() {
		return _state.todos.map(t => new ToDo(t))
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getTodos() {
		todoApi.get()
			.then(res => {
				//TODO Handle this response from the server
				let todoApiData = res.data.data.map(t => new ToDo(t))
				_setState('todos', todoApiData)
				console.log(todoApiData.length);
				document.getElementById('todo-counter').innerHTML = todoApiData.length
			})
			.catch(err => _setState('error', err.response.data))
	}

	addTodo(todo) {
		todoApi.post('', todo)
			.then(res => {
				//TODO Handle this response from the server (hint: what data comes back, do you want this?)
				_state.todos.push(res.data.data)
				_setState('todos', _state.todos)
				this.getTodos()
			})
			.catch(err => _setState('error', err.response.data))
	}

	toggleTodoStatus(todoId) {
		let todo = _state.todos.find(todo => todo._id == todoId)
		//TODO Make sure that you found a todo, 
		//		and if you did find one
		//		change its completed status to whatever it is not (ex: false => true or true => false)
		todo.completed = !todo.completed //default "unchecked is false, this flips value to true"
		todoApi.put(todoId, todo)
			.then(res => {
				this.getTodos()
				debugger
				_setState('completed', res.data.completed)
				console.log(res.data.completed);

				//TODO do you care about this data? or should you go get something else?

			})
			.catch(err => _setState('error', err.response.data))
	}

	removeTodo(todoId) {
		//TODO Work through this one on your own
		//		what is the request type
		//		once the response comes back, what do you need to insure happens?
		todoApi.delete(todoId)
			.then(res => {
				let index = _state.todos.findIndex(todos => todos._id == todoId)
				_state.todos.splice(index, 1)
				_setState('todos', _state.todos)
				this.getTodos()
			})
			.catch(err => {
				console.error(err)
			})
	}


}
