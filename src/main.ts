import './sass/main.scss';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import Vue from 'vue';
import VueRx from 'vue-rx';

import { createRouter } from './router';
import { makeHot, reload } from './util/hot-reload';

Vue.use(VueRx, {
  Observable,
  Subscription,
  Subject,
  polyfill: true
});

const navbarComponent = () =>
  import('./components/navbar').then(({ NavbarComponent }) => NavbarComponent);
// const navbarComponent = () => import(/* webpackChunkName: 'navbar' */'./components/navbar').then(({ NavbarComponent }) => NavbarComponent);

if (process.env.ENV === 'development' && module.hot) {
  const navbarModuleId = './components/navbar';

  // first arguments for `module.hot.accept` and `require` methods have to be static strings
  // see https://github.com/webpack/webpack/issues/5668
  makeHot(
    navbarModuleId,
    navbarComponent,
    module.hot.accept('./components/navbar', () =>
      reload(
        navbarModuleId,
        (<any>require('./components/navbar')).NavbarComponent
      )
    )
  );
}

new Vue({
  el: '#app-main',
  router: createRouter(),
  components: {
    navbar: navbarComponent
  }
});
