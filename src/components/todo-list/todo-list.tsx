import { Component, Prop, h } from '@stencil/core';
import { TodoItem } from "../../models/todoItem";


@Component({
  tag: 'todo-list',
  styleUrl: 'todo-list.css',
  shadow: true
})
export class TodoList {
  @Prop() todoItems: TodoItem[];

  deleteFromList(e) {
    let tempItems: TodoItem[] = [];
    this.todoItems.map((item: TodoItem) => {
      if (item.id === e.currentTarget.id) {

      } else {
        tempItems = [...tempItems, item];
      }
    });

    this.todoItems = tempItems;
    localStorage.setItem('todoItems', JSON.stringify(this.todoItems));
  }

  checkItem(e) {
    let tempItems: TodoItem[] = [];
    this.todoItems.map((item: TodoItem) => {
      if (item.id === e.currentTarget.id) {
        if (item.isChecked === true) {
          item.isChecked = false;
        } else {
          item.isChecked = true;
        }
        tempItems = [...tempItems, item];

      } else {
        tempItems = [...tempItems, item];
      }
    });
    this.todoItems = tempItems;
    localStorage.setItem('todoItems', JSON.stringify(this.todoItems));
  }

  render() {
    const deleteFromList = (e) => this.deleteFromList(e);
    const checkItem = (e) => this.checkItem(e);
    return (
      <ul class="todo-list">
        {
          this.todoItems.map((item: TodoItem) => (
            <li class={(item.isChecked === false) ? "todo-item" : "todo-item done"}>
              <input type="checkbox" id={item.text}></input>
              <label onClick={checkItem} id={item.id} class={(item.isChecked === false) ? "tickBeforeCheck" : "tick"}></label>
              <span title={item.text} class="itemText">{item.text}</span>
              <button id={item.id} onClick={deleteFromList}><img class="img" src='./assets/icon/deleteNew.png'></img></button>
            </li>
          ))
        }
      </ul>
    );
  }

}
