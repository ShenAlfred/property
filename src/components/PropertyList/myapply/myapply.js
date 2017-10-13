/**
 * Created by admin on 2017/10/13.
 */
import when from 'when';
import api from '../../../api';
import config from '../../../config';
import devEnv from '../../devEnv';

const _data = {
  applyList: {
    type: ""
  }
};

const _methods = {
  getApplyList() {
    const deferred = when.defer();
    const promise = deferred.promise;
    this.$ajax.get(config.baseUrl + api.getApplyList, {})
      .then((response) => {
        deferred.resolve(response);
      }).catch((response) => {
        deferred.reject(response);
    });
    return promise;
  },
  main() {
    console.log('我的申请');
    this.getApplyList().then((result) => {
      _data.applyList = result.data.data;
      if(_data.applyList.typeId == 1) {
        _data.applyList.type = "归还申请";
      }if(_data.applyList.typeId == 2) {
        _data.applyList.type = "维修申请";
      }
    });
  }
};

export default {
  data: _data,
  method: _methods
}

