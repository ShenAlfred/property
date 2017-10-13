<template>
    <div>
      <div class="detail-warp">
        <div class="detail-item">
          <strong>型号:</strong>
          <span> {{ propertyDetail.modelNum }} </span>
        </div>
        <div class="detail-item">
          <strong>类型:</strong>
          <span> {{ propertyDetail.typeId }} </span>
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
  @import url(./detail.css);
</style>
<script>

  import propertyDetail from './propertyDetail';

  export default {
    data () {
      return propertyDetail.data
    },
    methods: propertyDetail.method,
    mounted: propertyDetail.method.main
  }
</script>
