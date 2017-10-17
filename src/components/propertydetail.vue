<template>
  <div>
    <div class="detail-warp">
        <div class="detail-item">
          <strong>型号:</strong>
          <span> {{ propertyDetail.modelNum }} </span>
        </div>
        <div class="detail-item">
          <strong>类型:</strong>
          <span> {{ propertyDetail.typeName }} </span>
        </div>
        <div class="detail-item">
          <strong>质保截止日期:</strong>
          <span> {{ propertyDetail.fixEndTime }} </span>
        </div>
        <div class="detail-item">
          <strong>资产编号:</strong>
          <span> {{ propertyDetail.code }} </span>
        </div>
        <div class="detail-item">
          <strong>资产状态:</strong>
          <span> {{ propertyDetail.state_text }} </span>
        </div>
        <div class="detail-item">
          <strong>所属公司:</strong>
          <span> {{ propertyDetail.corpName }} </span>
        </div>
        <div class="detail-item">
          <strong>价值:(单位: 元)</strong>
          <span> {{ propertyDetail.price }} </span>
        </div>
        <div class="detail-item">
          <strong>备注:</strong>
          <span> {{ propertyDetail.remark }} </span>
        </div>
      </div>
  </div>
</template>
<style>
  @import url('./property.css');
</style>
<script>

import when from 'when';
import api from '../api';
import config from '../config';
import devEnv from './devEnv';

  export default {
    data() {
      return {
        propertyDetail: {
          state_text: ""
        }
      }
    },
    methods: {
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
      }
    },
    mounted() {
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
      });
    }
  }

</script>