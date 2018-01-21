import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';
import { makeHot, reload } from './util/hot-reload';

const statsComponents = () =>
  import('./components/stats').then(({ StatsComponent }) => StatsComponent);

if (process.env.ENV === 'development' && module.hot) {
  const statsModuleId = './components/stats';

  // first arguments for `module.hot.accept` and `require` methods have to be static strings
  // see https://github.com/webpack/webpack/issues/5668
  makeHot(
    statsModuleId,
    statsComponents,
    module.hot.accept('./components/stats', () =>
      reload(
        statsModuleId,
        (<any>require('./components/stats')).statsComponents
      )
    )
  );
}

Vue.use(VueRouter);

export const createRouter = () =>
  new VueRouter({ mode: 'history', routes: routes });
