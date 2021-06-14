import { TodoLogo } from './todo-logo';

describe('todo-logo', () => {
  let todoLogo;
  beforeEach(() => {
    todoLogo = new TodoLogo();
  });

  it('renders', async () => {
    expect(todoLogo).toBeTruthy();
  });

});
