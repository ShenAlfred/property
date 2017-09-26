import when from 'when';
import api from '../../api';
import config from '../../config';

const _data = {
    isShow_pro: 1,
    isShow_aly: 0,
    router: ['/myproperty', '/myapply']
}

const _methods = {
    TabChange(index) {
        this.$router.push(_data.router[index]);
    }
}

export default {
    data: _data,
    methods: _methods
}