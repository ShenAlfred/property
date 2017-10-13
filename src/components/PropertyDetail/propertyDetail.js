/**
 * Created by admin on 2017/10/13.
 */
import when from 'when';
import api from '../../api';
import config from '../../config';
import devEnv from '../devEnv';

const _data = {
  propertyDetail: {
    state_text: ""
  }
}

const _methods = {
  getPropertyDetail(_params) {
    const deferred = when.defer();
    const promise = deferred.promise;
    this.$ajax.get(config.baseUrl + api.getPropertyDetail, {
      params: _params
    }).then((response) => {
      deferred.resolve(response);
    }).catch((response) => {
      deferred.reject(response);
    });
    return promise;
  },
  main() {
    const _params = {
      propId: this.$route.params.propId
    }
    this.getPropertyDetail(_params).then((result) => {
      this.propertyDetail = result.data.data;
      switch (this.propertyDetail.state) {
        case 0:
          this.propertyDetail.state_text = "空置";
        break;
        case 1:
          this.propertyDetail.state_text = "使用";
        break;
        case 2:
          this.propertyDetail.state_text = "损坏";
        break;
        case 3:
          this.propertyDetail.state_text = "维修";
        break;
        case 4:
          this.propertyDetail.state_text = "报废";
        break;
      }
    })
  }
};

export default {
  data: _data,
  method: _methods
}
