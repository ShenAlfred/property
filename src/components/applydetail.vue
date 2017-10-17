<template>
    <div>
        <div class="detail-warp">
            <div>
                <strong>申请类型:</strong>
                <span>{{applyDetail.applyType}}</span>
            </div>
            <div>
                <strong>申请事由:</strong>
                <span>{{ applyDetail.reason }}</span>
            </div>
            <div>
                <strong>申请时间:</strong>
                <span>{{applyDetail.createTime}}</span>
            </div>
            <div>
                <strong>处理时间:</strong>
                <span>{{applyDetail.handleTime}}</span>
            </div>
            <div>
                <strong>处理意见:</strong>
                <span>{{applyDetail.handleResult}}</span>
            </div>
            <div>
                <strong>申请状态:</strong>
                <span>{{applyDetail.applyState}}</span>
            </div>
            <div style="margin-top: 20px;">
                <div class="ap-s-t">固定资产列表</div>
                <div class="pro-item" v-for="(ad2, index) in applyDetail2">
                    <div v-bind:class="{ odd: index%2==0 }">
                        <flexbox>
                            <flexbox-item>
                                <strong>类型:</strong>
                                <span>{{ ad2.typeName }}</span>
                            </flexbox-item>
                            <flexbox-item>
                                <strong>编号:</strong>
                                <span>{{ ad2.code }}</span>
                            </flexbox-item>
                        </flexbox>
                        <div>
                            <strong>所属公司:</strong>
                            <span>{{ad2.corpName}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="margin: 0 10px;">
            <x-button @click.native="goHome()" type="default">返回首页</x-button>
        </div>
    </div>
</template>
<style>
    @import url('./property.css');
</style>
<script>

    import { Flexbox, FlexboxItem, XButton } from 'vux';
    import when from 'when';
    import api from '../api';
    import config from '../config';
    import devEnv from './devEnv';

    export default {
        data() {
            return {
                applyDetail: {
                    applyType: '',
                    applyState: ''
                },
                applyDetail2: []
            }
        },
        methods: {
            goHome() {
                window.location.href = "/property/app"
            },
            getApplyDetail1(_params) {
                const deferred = when.defer();
                const promise = deferred.promise;
                this.$ajax.get(config.baseUrl + api.getApplyDetail1, {
                    params: _params
                }).then((response) => {
                    deferred.resolve(response);
                }).catch((response) => {
                    deferred.reject(response);
                });
                return promise;
            },
            getApplyDetail2(_params) {
                const deferred = when.defer();
                const promise = deferred.promise;
                this.$ajax.get(config.baseUrl + api.getApplyDetail2, {
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
                reqId: this.$route.params.reqId
            }
            this.getApplyDetail1(_params).then((res) => {
                const type = res.data.data.typeId;
                const state = res.data.data.state;
                this.applyDetail = res.data.data;
                if(type == 1) {
                    this.applyDetail.applyType = "归还申请";
                }else if(type == 2) {
                    this.applyDetail.applyType = "维修申请";
                }

                if(state == 1){
                    this.applyDetail.applyState = "申请中";
                }else if(state == 2){
                    this.applyDetail.applyState = "拒绝";
                }else if(state == 3){
                    this.applyDetail.applyState = "通过";
                }
            });
            this.getApplyDetail2(_params).then((res) => {
                var result = res.data.data;
                this.applyDetail2 = result;
                for(var i=0;i<this.applyDetail2.length;i++) {
                    switch (this.applyDetail2[i].state) {
                        case 0:
                            this.applyDetail2[i].state_text = "空置";
                        break;
                        case 1:
                            this.applyDetail2[i].state_text = "使用";
                        break;
                        case 2:
                            this.applyDetail2[i].state_text = "损坏";
                        break;
                        case 3:
                            this.applyDetail2[i].state_text = "维修";
                        break;
                        case 4:
                            this.applyDetail2[i].state_text = "报废";
                        break;
                    };
                }
            });
        },
        components: {
            Flexbox, 
            FlexboxItem,
            XButton
        }
    }

</script>