<template>
    <div>
      <div class="property-tab" v-show="!isSelectStart">
        <button-tab>
          <button-tab-item @on-item-click="TabChange(0)" v-bind = "{selected: selected==0}">
            我的资产
          </button-tab-item>
          <button-tab-item @on-item-click="TabChange(1)" v-bind = "{selected: selected==1}">
            我的申请
          </button-tab-item>
        </button-tab>
      </div>
      <router-view></router-view>
    </div>
</template>
<style scoped>
  @import url('./property-list.css');
</style>
<script>
    import { ButtonTab, ButtonTabItem } from 'vux';
    import list from '../list';
    import config from '../../../config'

    export default {
      data () {
        return list.data
      },
      methods: list.methods,
      mounted: list.methods.main,
      components: {
        ButtonTab,
        ButtonTabItem
      }
    }
</script>
