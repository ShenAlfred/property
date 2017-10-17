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
      component: resolve => require(['@/components/property-list'], resolve),
      beforeEnter: (to, ffrom, next) => {
        if(typeof(reqId) == "undefined") {
          next();
        }else {
          if(reqId) {
            next({name: 'applyDetail', params: {reqId: reqId}})
          }else {
            next();
          }
        }
        if(config.isDevEnv) {
          const query = {
            ticket: util.getUrlKey("ticket") || '7f55e10811a4403b76d1cf1a6f7c7016'
          };
          axios.get(config.baseUrl + "/property/app/link", {
            params: {
              ticket: query.ticket
            }
          }).then((response) => {
            next()
          }).catch((response) => {
          });
        }
      }
    },
    {
      path: '/applyDetail/:reqId',
      name: 'applyDetail',
      component: resolve => require(['@/components/applyDetail'], resolve)
    },
    {
      path: '/propertyDetail/:propId',
      name: 'propertyDetail',
      component: resolve => require(['@/components/propertydetail'], resolve)
    }
  ];

let router = new Router({
  mode: config.isDevEnv ? 'history' : 'hash',
  routes: routes
});

export default router;
