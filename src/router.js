import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/page-one',
      name: 'page-one',
      component: () => import('./views/PageOne.vue'),
      // beforeEnter(to, from, next) {
      //   console.log('## enter', to, from, next);
      //   next();
      //   // called before the route that renders this component is confirmed.
      //   // does NOT have access to `this` component instance,
      //   // because it has not been created yet when this guard is called!
      // },
      // beforeLeave(to, from, next) {
      //   console.log('## leave', to, from, next)
      //   next();
      //   // called when the route that renders this component is about to
      //   // be navigated away from.
      //   // has access to `this` component instance.
      // },
    },
    {
      path: '/page-two',
      name: 'page-two',
      component: () => import('./views/PageTwo.vue'),
    },
  ],
});
