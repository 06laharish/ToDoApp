import { TodoListForm } from './todoListForm';


describe('todo-list', () => {
    let todoListForm;
    beforeEach(() => {
        todoListForm = new TodoListForm();
        todoListForm.todoItems = [{ id: '0', text: 'abcd', isChecked: false }];
        spyOn(todoListForm.inputChange, 'emit');
        spyOn(todoListForm.submit, 'emit');

    });

    it('renders', async () => {
        expect(todoListForm).toBeTruthy();
    });

    it('should call handleOnChange the entered value', () => {
        const e = { target: { value: 'mockDataEntered' } };
        todoListForm.handleOnChange(e);
        expect(todoListForm.value).toBe('mockDataEntered');
        // expect(todoListForm.inputChange.emit).toHaveBeenCalled();
    });

    it('should call handleOnSubmit the entered value so that input should be again empty', () => {
        const e = { target: { value: 'mockDataEntered' }, preventDefault: ()=>{} };
        todoListForm.handleOnSubmit(e);
        expect(todoListForm.value).toBe('');
        // expect(todoListForm.inputChange.emit).toHaveBeenCalled();
    });
});
