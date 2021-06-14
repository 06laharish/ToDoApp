import { Component, h, State, Element, Prop } from '@stencil/core';
import { TodoItem } from "../../models/todoItem";

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {

  @State() items: TodoItem[] = [];
  @State() text: string;
  @State() todoId: number = 0;
  @State() isChecked: boolean = false;
  @Element() element;
  @Prop({
    reflect: true
  }) headerToBeDisplayed: boolean = true;

  todoItems = [];
  
  render() {
    this.getItems();
    const handleOnChange = (e) => this.handleOnChange(e);
    const handleSubmit = (e) => this.handleSubmit(e);
    return (
        <div class="app-home">
          <todo-logo class = { this.headerToBeDisplayed  ? 'headerList': 'headerEmpty' } />
          <todo-list todoItems={this.items} />
          <todo-list-form onSubmit={handleSubmit} onInputChange={handleOnChange} todoItemsLength={this.items.length}/>
        </div>
    );
  }

  private handleSubmit(e) {
    e.preventDefault();
    if (!this.text.length) {
      return;
    }
    const data = this.todoId++;
    const newItem = new TodoItem(this.text, data.toString(), this.isChecked);
    this.text = '';
    this.items = [...this.items, newItem];
    localStorage.setItem("todoItems", JSON.stringify(this.items)); 
    if(this.items.length > 0){
      this.headerToBeDisplayed = false;
    }else{
      this.headerToBeDisplayed = true;
    }
  }

  private handleOnChange(e) {
    this.text = e.detail;
  }

  private getItems(){
    const storedDataItems = localStorage.getItem("todoItems");
    if(storedDataItems!=null){
      this.items = JSON.parse(storedDataItems);
      this.todoId = this.items.length;
      if(this.items.length > 0){
        this.headerToBeDisplayed = false;
      }else{
        this.headerToBeDisplayed = true;
      }
    }
  }
}
