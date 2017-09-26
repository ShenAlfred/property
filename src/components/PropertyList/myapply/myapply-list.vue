<template>
    <div v-if="isshow">
        <div class="property-content">
            <flexbox class="property-attr-item">
                <flexbox-item>类型:</flexbox-item>
                <flexbox-item>编号:</flexbox-item>
            </flexbox>
            <div class="property-attr-item">
                资产状态:
            </div>
        </div>    
    </div>
</template>
<style>
    @import url(../list.css);
</style>
<script>
    import { Flexbox, FlexboxItem } from 'vux';
    
    export default {
        props: ['show'],
        data() {
            return {
                isshow: this.show
            }
        },
        mounted() {
            console.log(this.isshow)
        },
        components: {
            Flexbox,
            FlexboxItem
        }
    }
</script>