import Vue from 'vue';
import VueRouter from 'vue-router';
import Component from 'vue-class-component';
import { spy, assert } from 'sinon';
import { expect } from 'chai';
import { ComponentTest, MockLogger } from '../../util/component-test';
import { NavbarComponent } from './navbar';

let loggerSpy = spy();

@Component({
  template: require('./navbar.html')
})
class MockNavbarComponent extends NavbarComponent {
  constructor() {
    super();
    this.logger = new MockLogger(loggerSpy);
  }
}

describe('Navbar component', () => {
  let directiveTest: ComponentTest;
  let router: VueRouter;

  before(() => {
    Vue.use(VueRouter);
    directiveTest = new ComponentTest(
      '<div><navbar></navbar><router-view>loading...</router-view></div>',
      { navbar: MockNavbarComponent }
    );

    let statsComponents = { template: '<div class="stats">Stats</div>' };

    router = new VueRouter({
      routes: [{ path: '/', component: statsComponents }]
    });
  });

  it('should render correct contents', async () => {
    directiveTest.createComponent({ router: router });

    await directiveTest.execute(vm => {
      // ensure Vue has bootstrapped/run change detection
      debugger;
      assert.calledWith(loggerSpy, 'Default object property!');
      expect(vm.$el.querySelectorAll('ul.nav li').length).to.equal(3);
    });
  });
});
