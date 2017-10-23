<template>
    <div>
      <div class="property-tab" v-show="!isSelectStart">
        <button-tab>
          <button-tab-item @on-item-click="TabChange(0)" selected>
            我的资产
          </button-tab-item>
          <button-tab-item @on-item-click="TabChange(1)">
            我的申请
          </button-tab-item>
        </button-tab>
      </div>
      <div style="padding-bottom: 50px;" v-show="showMyProperty">
        <!--step1 默认显示列表 -->
        <div v-show="isShowDefaultList">
          <swipeout>
              <swipeout-item v-for="pl in filterApplyed()" :key="pl.id">
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
        <!--step1 显示可以选择的列表 -->
        <div v-show="isShowCheckerList">
          <checker default-item-class="check-default" selected-item-class="check-selected" v-model="checked_value" type="checkbox">
            <div v-for="pl in filterApplyed()" :key="pl.id">
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
        <!--step2 归还或修复按钮组 -->
        <div class="bottom-button" v-show="!isShowBtnGroup">
            <flexbox :gutter="0">
              <flexbox-item>
                <x-button type="primary" @click.native="selectStart(1)">归还</x-button>
              </flexbox-item>
              <flexbox-item>
                <x-button type="warn" @click.native="selectStart(2)">报修</x-button>
              </flexbox-item>
            </flexbox>
        </div>
        <!--step2 选择的时候完成或取消按钮组 -->
        <div class="bottom-button" v-show="isShowCheckerList">
            <flexbox :gutter="0">
              <flexbox-item>
                <x-button type="default" @click.native="confirmSelect()">完成</x-button>
              </flexbox-item>
              <flexbox-item>
                <x-button type="default" @click.native="cancelSelect()">取消</x-button>
              </flexbox-item>
            </flexbox>
        </div>
        <!--step3 报修或归还原因的文本框 -->
        <div v-show="isShowTextArea"> 
          <div class="textarea-warp">
            <x-textarea :max="100" v-model="reason" :placeholder="placeholderText"></x-textarea>
          </div>
          <div class="btn-group">
            <x-button type="warn" @click.native="submitData()">提交</x-button>
          </div>
        </div>
        <toast v-model="isSelectEmpty" type="text" width="15em" position="bottom">请选择，资产不能为空。</toast>
        <toast v-model="showSubmitSuccessToast" type="success" :time="1000" text="提交成功"></toast> 
        <toast v-model="showSubmitErrorToast" type="cancel" :time="1000" text="提交失败"></toast>
        <div class="friendship-tips" v-show="noDataTip">亲！您的物品都已经归还或都已经报修了。</div>
      </div>
      <!-- 我的申请 -->
      <div style="padding-bottom: 50px;" v-show="showApplying">
        <div v-for="al in applyList" :key="al.id">
          <div class="property-content" v-on:click="goToApplyDetail(al.id)">
            <div>
              <strong>申请类型:</strong>
              <span>{{al.typeId == 1 ? '归还申请' : '维修申请'}}</span>
            </div>
            <div>
              <strong>申请事由:</strong>
              <span>{{al.reason}}</span>
            </div>
            <div>
              <strong>申请时间:</strong>
              <span>{{al.createTime}}</span>
            </div>
            <div>
              <strong>处理时间:</strong>
              <span>{{al.handleTime}}</span>
            </div>
            <div>
              <strong>申请状态:</strong>
              <span>{{ al.state == 1 ? '申请中': (al.state == 2 ? '拒绝' : (al.state == 3 ? '通过' : '')) }}</span>
            </div>
            <div>
              <strong>处理意见:</strong>
              <span>{{al.handleResult}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<style scoped>
  @import url('./property.css');

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
      line-height: 30px;
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
    import { Toast, XTextarea, Swipeout, SwipeoutItem, Checker, CheckerItem, SwipeoutButton, XButton, Flexbox, FlexboxItem, ButtonTab, ButtonTabItem } from 'vux';
    import when from 'when';
    import api from '../api';
    import config from '../config';

    export default {
      data() {
        return {
          showMyProperty: true,
          showApplying: false,
          isSelectStart: '',
          reason: '',
          propertyList: [],
          applyList: [],
          noDataTip: false,
          isShowBtnGroup: false,
          isShowDefaultList: true,
          isShowCheckerList: false,
          isShowTextArea: false,
          isSelectEmpty: false,
          checked_value: '',
          placeholderText: '',
          submitType: '',
          showSubmitSuccessToast: false,
          showSubmitErrorToast: false
        }
      },
      methods: {
        filterApplyed: function() {
          const propertyList = this.propertyList;
          return propertyList.filter(function (item){
            return item.requestState == 0;
          });
        },
        //我的申请和我的资源切换
        TabChange(index) {
          if(index == 0) {
            this.showMyProperty = true;
            this.showApplying = false;
            //this.$store.commit('setIsSelectStart', false);
            this.getPropertyList().then((resolve) => {
              if(resolve.data.data.length) {
                this.propertyList = resolve.data.data;
              }
            });
          }else if(index == 1) {
            this.showMyProperty = false;
            this.showApplying = true;
             this.getApplyList().then((resolve) => {
              if(resolve.data.data.length) {
                this.applyList = resolve.data.data;
              }
            });
          }
        },
        //跳转详情
        goToDetail(propertyId) {
            this.$router.push( {name: 'propertyDetail', params: {propId: propertyId}});
        },
        //跳转我的应用详情
        goToApplyDetail(applyId) {
          this.$router.push( {name: 'applyDetail', params: {reqId: applyId}});
        },
        //归还或修复
        selectStart(type) {
          if(type == 1) {
            this.placeholderText = '请填写归还原因。';
          }else if (type == 2) {
            this.placeholderText = '请填写报修原因。';
          }
          this.submitType = type;
          this.isShowCheckerList = true;
          this.isShowDefaultList = false;
          this.$store.commit('setIsSelectStart', true);
        },
        //确定完成选择提交的资源
        confirmSelect() {
          if(!this.checked_value.length) {
            this.isSelectEmpty = true;
          }else {
            this.isShowTextArea = true;
            this.isShowCheckerList = false;
            this.isShowBtnGroup = true;
          }
        },
        //取消选择资源
        cancelSelect() {
          this.isShowCheckerList = false;
          this.isShowDefaultList = true;
          this.$store.commit('setIsSelectStart', false);
        },
        //提交数据
        submitData() {
          this.$ajax.get(config.baseUrl + api.requestApply, {
            params: {
              typeId: this.submitType,
              propIds: this.checked_value.join(','),
              reason: this.reason
            }
          }).then((response) => {
            if(response.data.code == '0') {
              this.showSubmitSuccessToast = true;
              setTimeout(() => {
                //this.$router.go({path: '/'});
                window.location.href = "/property/app"
              }, 1500);
            }else {
              this.showSubmitErrorToast = true;
            }
          }).catch((response) => {
            this.showSubmitErrorToast = true;
          });
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
        }
      },
      mounted() {
        const that = this;
        this.isSelectStart = this.$store.getters.getSelectStart;
        this.$store.watch((state) => state.isSelectStart, function(value) {
          that.isSelectStart = value;
        });
        this.getPropertyList().then((resolve) => {
          if(resolve.data.data.length) {
            this.propertyList = resolve.data.data;
            if(!this.filterApplyed().length) {
              this.noDataTip = true;
              this.isShowBtnGroup = true;
            }else {
              this.noDataTip = false;
              this.isShowBtnGroup = false;
            }
          }else {
            this.noDataTip = true;
            this.isShowBtnGroup = true;
          }
        });
      },
      components: {
        ButtonTab,
        ButtonTabItem,
        Toast, 
        XTextarea,
        Swipeout, 
        SwipeoutItem, 
        Checker,
        CheckerItem,
        SwipeoutButton,
        XButton,
        Flexbox, 
        FlexboxItem 
      }
    }
</script>
