<template>
    <div>
      <div class="property-tab">
        <button-tab>
          <button-tab-item @on-item-click="TabChange(0)" selected>
            我的资产
          </button-tab-item>
          <button-tab-item @on-item-click="TabChange(1)">
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

    export default {
      data () { 
        return list.data
      },
      methods: list.methods,
      mounted() {
        
      },
      components: {
        ButtonTab, 
        ButtonTabItem
      }
    }
</script>
