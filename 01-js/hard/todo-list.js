/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todoList = [];
  }
  checkInBound(index) {
    return index >= 0 && index <= this.todoList.length - 1;
  }
  add(todo) {
    this.todoList.push(todo);
  }
  remove(indexOfTodo) {
    if (this.checkInBound(indexOfTodo)) {
      let newArr = [];
      for (let i = 0; i < this.todoList.length; i++) {
        if (i === indexOfTodo) continue;
        else newArr.push(this.todoList[i]);
      }
      this.todoList = [...newArr];
    }
  }
  update(index, updatedTodo) {
    // 0 elements -> update none
    // 1 elements -> update 0
    // 2 elements -> update 0,1
    // 3 elements -> update 0,1,2
    if (this.checkInBound(index)) this.todoList[index] = updatedTodo;
  }
  getAll() {
    return this.todoList;
  }
  get(indexOfTodo) {
    if (this.checkInBound(indexOfTodo)) return this.todoList[indexOfTodo];
    return null;
  }
  clear() {
    this.todoList = [];
  }
}

module.exports = Todo;
