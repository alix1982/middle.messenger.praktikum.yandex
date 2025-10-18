import { expect } from "chai";

describe('test router', () => {
  beforeEach(() => {
    window.history.pushState({page: 'login'}, 'Login', '/login');
    window.history.pushState({page: 'registration'}, 'Registration', '/sign-up');
  });
  it('router', () => {
    // let pageRender = 'messenger';
    // console.log(pageRender);
    // navigate('/messenger');
    // navigate('/settings');
    // navigate('/settings');

console.log('ok')


    // routerBack();
    // console.log(window.history);
    // console.log(global.window.history.length);

    expect(global.window.history.length).to.eq(1);
  });
});
