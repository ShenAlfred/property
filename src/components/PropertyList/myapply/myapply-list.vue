<template>
    <div>
        <div class="property-content">
            <flexbox class="property-attr-item">
                <flexbox-item>
                  <strong>类型:</strong>
                  <span>{{ applyList.type }}</span>
                </flexbox-item>
                <flexbox-item>
                  <strong>编号:</strong>
                  <span></span>
                </flexbox-item>
            </flexbox>
            <div class="property-attr-item">
              <strong>资产状态:</strong>
              <span></span>
            </div>
        </div>
    </div>
</template>
<style>
    @import url(../list.css);
</style>
<script>
    import { Flexbox, FlexboxItem } from 'vux';
    import myApply from './myapply'

    export default {
        data() {
            return myApply.data
        },
        methods: myApply.method,
        mounted: myApply.method.main,
        components: {
            Flexbox,
            FlexboxItem
        }
    }
</script>
