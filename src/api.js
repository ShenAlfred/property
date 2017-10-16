/**
 * Created by admin on 2017/6/16.
 */
const api = {
  getPropertyList:       '/property/app/propList',             //获取资源列表
  requestApply:          '/property/app/req',                  //变更申请
  getApplyList:          '/property/app/reqList',              //获取资产变更申请列表
  getPropertyDetail:     '/property/app/propDetail',           //获取资产详情
  getApplyDetail1:       '/property/app/reqDetail',            //获取资产变更申请详情
  getApplyDetail2:       '/property/app/reqPropList'           //获取变更申请对应固定资产列表
};

export default api;
