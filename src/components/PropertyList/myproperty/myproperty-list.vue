<template>
    <div style="padding-bottom: 50px;">
      <div v-show="!isSelectStart">
        <swipeout>
            <swipeout-item v-for="pl in propertyList" :key="pl.id">
                <div slot="content" class="property-content">
                    <div v-on:click="goToDetail(pl.id)">
                        <flexbox class="property-attr-item">
                            <flexbox-item>
                              <strong>类型:</strong>
                              <span>{{ pl.typeName }}</span>
                            </flexbox-item>
                            <flexbox-item>
                              <strong>编号:</strong>
                              <span>{{ pl.code}}</span>
                            </flexbox-item>
                        </flexbox>
                        <div class="property-attr-item">
                            <strong>所属公司:</strong>
                            <span>{{pl.corpName}}</span>
                        </div>
                    </div>
                </div>
            </swipeout-item>
        </swipeout>
      </div>
      <div v-show="isSelectStart">
        <checker default-item-class="check-default" selected-item-class="check-selected" v-model="checked_value" type="checkbox">
          <div v-for="pl in propertyList" :key="pl.id">
            <checker-item  :value="pl.id">
              <div class="property-content">
                <flexbox class="property-attr-item">
                  <flexbox-item>
                    <strong>类型:</strong>
                    <span>{{ pl.typeName }}</span>
                  </flexbox-item>
                  <flexbox-item>
                    <strong>编号:</strong>
                    <span>{{ pl.code}}</span>
                  </flexbox-item>
                </flexbox>
                <div class="property-attr-item">
                  <strong>所属公司:</strong>
                  <span>{{pl.corpName}}</span>
                </div>
                <div class="check-icon">
                  <i class="fa fa-check"></i>
                </div>
              </div>
            </checker-item>
          </div>
        </checker>
      </div>
      <div class="bottom-button">
          <flexbox :gutter="0">
            <flexbox-item>
              <x-button type="primary" @click.native="selectStart()">归还</x-button>
            </flexbox-item>
            <flexbox-item>
              <x-button type="warn" @click.native="selectStart()">报修</x-button>
            </flexbox-item>
          </flexbox>
      </div>
      <div class="bottom-button" v-show="isSelectStart">
        <span>完成</span>
      </div>
      <div v-show="isComplete">
        <div class="textarea-warp">
          <x-textarea :max="100" placeholder="请填写报修原因"></x-textarea>
        </div>
        <div class="btn-group">
          <x-button type="warn" @click.native="">提交</x-button>
        </div>
      </div>
    </div>
</template>
<style scoped>
    @import url(../list.css);

    .vux-checker-item {
      position: relative;
      display: block;
    }
    .check-icon {
      position: absolute;
      top: 50%;
      right: 20px;
      width: 30px;
      height: 30px;
      margin-top: -15px;
      border: 1px solid #ccc;
      border-radius: 100%;
      text-align: center;
    }
    .vux-checker-item.check-default .check-icon {
      border: 1px solid #ccc;
    }
    .vux-checker-item.check-default .check-icon i {
      color: #ccc;
    }
    .vux-checker-item.check-selected .check-icon {
      background: #ff5454;
      border: 1px solid #ff5454;
    }
    .vux-checker-item.check-selected .check-icon i {
      color: #fff;
    }
    .bottom-button .weui-btn {
      border-radius: 0;
    }
</style>
<script>
    import { XTextarea, Swipeout, SwipeoutItem, Checker, CheckerItem, SwipeoutButton, XButton, Flexbox, FlexboxItem } from 'vux';
    import myproperty from './myproperty';

    export default {
        data () {
          return myproperty.data
        },
        methods: myproperty.method,
        mounted: myproperty.method.main,
        components: {
            XTextarea,
            Swipeout,
            SwipeoutItem,
            SwipeoutButton,
            Checker,
            CheckerItem,
            XButton,
            Flexbox,
            FlexboxItem
        }
    }
</script>
