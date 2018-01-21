import { expect } from 'chai';
import { StatsComponent } from './stats';
import { ComponentTest } from '../../util/component-test';

describe('Stats component', () => {
  let directiveTest: ComponentTest;

  beforeEach(() => {
    directiveTest = new ComponentTest('<div><stats></stats></div>', {
      stats: StatsComponent
    });
  });

  it('should render correct contents', async () => {
    directiveTest.createComponent();
    await directiveTest.execute(vm => {
      debugger;
      const mode = process.env.ENV;
      expect(vm.$el.querySelector('.mode').textContent).to.equal(
        `${mode} mode`
      );
      expect(vm.$el.querySelector('.package').textContent).to.equal(
        'vue-webpack-typescript'
      );
    });
  });
});
