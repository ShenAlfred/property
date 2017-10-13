import store from '../../store';

const _data = {
    router: ['/myproperty', '/myapply'],
    selected: 0,
    isSelectStart: store.getters.getSelectStart
};

const _methods = {
    TabChange(index) {
        this.$router.push(_data.router[index]);
    },
    main() {
      const whatPage = this.$route.name;
      if(whatPage == 'myproperty') {
        _data.selected = 0;
      }
      if(whatPage == 'myapply') {
        _data.selected = 1;
      }
    }
};

export default {
    data: _data,
    methods: _methods
}
