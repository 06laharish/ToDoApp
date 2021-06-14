import { Component, Prop, Event, EventEmitter, State, h } from '@stencil/core';


@Component({
  tag: 'todo-list-form',
  styleUrl: 'todo-list-form.css'
})
export class TodoListForm {
  @Prop() todoItemsLength: number;

  @State() value: string = '';

  @Event() inputChange: EventEmitter;
  @Event() submit: EventEmitter;

  handleOnChange(e) {
    this.value = e.target.value;
    this.inputChange.emit(this.value)
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.submit.emit(this.value);
    this.value = '';
  }

  render() {
    const handleOnChange = (e) => this.handleOnChange(e);
    const handleOnSubmit = (e) => this.handleOnSubmit(e);

    return (
      <form class="todo-list-form" onSubmit={handleOnSubmit}>
        <input
          type="text"
          onInput={handleOnChange}
          value={this.value}
          aria-label="Enter a new todo item"
          placeholder="E.g.Enter a text todo"
        />
      </form>
    );
  }
}
