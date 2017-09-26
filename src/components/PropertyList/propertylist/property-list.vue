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
      <myproperty-list :show="isShow_pro" ></myproperty-list>
      <myapply-list :show="isShow_aly" ></myapply-list>
    </div>
</template>
<style scoped>
  @import url('./property-list.css');
</style>
<script>
    import { ButtonTab, ButtonTabItem } from 'vux';
    import MypropertyList from '../myproperty/myproperty-list';
    import MyapplyList from '../myapply/myapply-list';
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
        ButtonTabItem,
        MypropertyList,
        MyapplyList
      }
    }
</script>
