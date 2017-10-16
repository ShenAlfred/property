/**
 * Created by admin on 2017/10/13.
 */
import when from 'when';
import config from '../config';

const devEnv = {
  getDevTicket() {
    const deferred = when.defer();
    const promise = deferred.promise;
    const query = {
      ticket: this.$route.query.ticket || '1fd8b2474549c06901731df7c5e01cd4'
    };
    this.$ajax.get(config.baseUrl + "/property/app/link", {
      params: {
        ticket: query.ticket
      }
    }).then((response) => {
      deferred.resolve(response);
    }).catch((response) => {
      deferred.reject(response);
    });
    return promise;
  }
}

export default {
  _fn: devEnv
}
