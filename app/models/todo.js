export default class ToDo {
  constructor(data) {
    this._id = data._id
    this.description = data.description
    this.completed = data.completed
  }

  get Template() {
    return `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <p class="card-text">${this.description}</p>
      </div>
      <div class="form-check text-center">
        <input class="form-check-input" type="checkbox" value="" id="checkbox" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">
          <label class="form-check-label" for="checkbox">
            Completed?
			    </label><br>
          <button class="btn btn-danger ml-2" onclick="app.controllers.todoController.removeTodo('${this._id}')">Delete Task</button>
          <button class="btn btn-warning ml-2" onclick="app.controllers.todoController.showEditTodo()">Edit Task</button>
		  </div>
      </div>
      `
  }
}