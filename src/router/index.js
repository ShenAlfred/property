import Vue from 'vue'
import Router from 'vue-router'
import config from '@/config'
import axios from 'axios'
import util from '@/util'

Vue.use(Router)

const routes = [
    {
      path: '/',
      name: 'propertyList',
      meta: {
        title: '资产列表',
      },
      component: resolve => require(['@/components/PropertyList/property-list'], resolve),
    },
  ];

let router = new Router({
  mode: config.isDevEnv ? 'history' : 'hash',
  routes: routes
});

export default router;
