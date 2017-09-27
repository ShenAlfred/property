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
      redirect: "/myproperty",
      component: resolve => require(['@/components/PropertyList/propertylist/property-list'], resolve),
      children: [
        {
          path: '/myproperty',
          component: resolve => require(['@/components/PropertyList/myproperty/myproperty-list'], resolve)
        },
        {
          path: '/myapply',
          component: resolve => require(['@/components/PropertyList/myapply/myapply-list'], resolve)
        }
      ]
    },
    {
      path: '/propertyDetail',
      name: 'propertyDetail',
      component: resolve => require(['@/components/PropertyDetail/propertydetail'], resolve)
    },
    {
      path: '/propertyApply',
      name: 'propertyApply',
      component: resolve => require(['@/components/PropertyList/myproperty/myproperty-apply'], resolve)
    },
    {
      path: '/propertyReturn',
      name: 'propertyReturn',
      component: resolve => require(['@/components/PropertyList/myproperty/myproperty-return'], resolve)
    }
  ];

let router = new Router({
  mode: config.isDevEnv ? 'history' : 'hash',
  routes: routes
});

export default router;
