import { Component, h } from '@stencil/core';

@Component({
  tag: 'todo-logo',
  styleUrl: 'todo-logo.css',
  shadow: true,
})
export class TodoLogo {

  render() {
      return (
        <div class="listEmpty" id="hideDive">
          <img class="todo-img" src='./assets/icon/todoLogo.png'></img>
          <ul class="todo-list js-todo-list"></ul>
          <h2>Add your first todo</h2>
          <p>
            What do you want to get done today?
        </p>
        </div>

      );
    }
}
