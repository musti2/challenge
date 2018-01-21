import { RouteConfig } from 'vue-router';

const StatsComponent = () =>
  import('./components/stats').then(({ StatsComponent }) => StatsComponent);

const routes: RouteConfig[] = [
  {
    path: '/',
    component: StatsComponent
  }
];

export default routes;
