import { AppHome } from './app-home';

describe('app-home', () => {
    let appHome;
    beforeEach(()=>{
        appHome = new AppHome();
        jest.spyOn(appHome, 'getItems');
        jest.spyOn(appHome, 'handleSubmit');
    })
  it('renders', async () => {
        expect(appHome).toBeTruthy();
  });

  it('should read data from local storage', ()=>{
        localStorage.setItem("todoItems",JSON.stringify([{id:'0', text:'abcd', isChecked: true }]));
        appHome.render();
        expect(appHome.getItems).toHaveBeenCalled();
        expect(appHome.headerToBeDisplayed).toBe(false);
  });

  it('should read data from local storage and todo length should match', ()=>{
    localStorage.setItem("todoItems",JSON.stringify([{id:'0', text:'abcd', isChecked: true }, {id:'1', text:'abcd', isChecked: false }]));
    appHome.render();
    expect(appHome.getItems).toHaveBeenCalled();
    expect(appHome.items.length).toBe(2);
})


});
