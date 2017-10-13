import when from 'when';
import api from '../../../api';
import config from '../../../config';
import devEnv from '../../devEnv';
import store from '../../../store';

const _data = {
  propertyList: [],
  isSelectStart: false,
  isComplete: false,
  checked_value: ''
}

const _method = {
    goToDetail(propertyID) {
        this.$router.push( {name: 'propertyDetail', params: {propId: propertyID}} );
    },
    goToOperation(type, propertyID) {
        if(type == 'return') {
            this.$router.push( { path: '/propertyReturn', params: {id: propertyID}} )
        }
        if(type == 'apply') {
            this.$router.push( { path: '/propertyApply', params: {id: propertyID}} )
        }
    },
    selectStart() {
      _data.isSelectStart = true;
      store.commit('setIsSelectStart', true);
    },
    toMuliteCheckListPage() {
      this.$router.push({name: 'muliteCheck'});
    },
    getPropertyList() {
      const deferred = when.defer();
      const promise = deferred.promise;
      this.$ajax.get(config.baseUrl + api.getPropertyList, {})
        .then((response) => {
          deferred.resolve(response);
        }).catch((response) => {
        deferred.reject(response);
      });
      return promise;
    },
    main() {
      if(config.isDevEnv) {
        devEnv._fn.getDevTicket.bind(this)().then(() => {
          this.getPropertyList().then((resolve) => {
            if(resolve.data.data.length) {
              this.propertyList = resolve.data.data;
            }
          });
        });
      }else {
        this.getPropertyList().then((resolve) => {
          if(resolve.data.data.length) {
            this.propertyList = resolve.data.data;
          }
        });
      }
    }
}

export default {
    data: _data,
    method: _method
}
