export class TodoItem {
  text: string;
  id: string;
  isChecked: boolean;
  constructor(text: string, id: string, checked: boolean) {
    this.text = text;
    this.id = id;
    this.isChecked = checked;
  }
}
