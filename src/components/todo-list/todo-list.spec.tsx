import { TodoList } from './todo-list';

describe('todo-list', () => {
    let todoList;
    beforeEach(() => {
        todoList = new TodoList();
        todoList.todoItems = [{ id: '0', text: 'mockValue', isChecked: false }];
    });
    it('renders', async () => {
        expect(todoList).toBeTruthy();
    });

    it('should select item when we pass the id', () => {
        const e = { currentTarget: { id: '0' } };
        todoList.checkItem(e);
        expect(todoList.todoItems[0].isChecked).toBe(true);
    });

    it('should delete selected item', () => {
        const e = { currentTarget: { id: '0' } };
        todoList.deleteFromList(e);
        expect(todoList.todoItems.length).toBe(0);
    })


});
