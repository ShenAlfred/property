<template>
    <div>
        <swipeout>
            <swipeout-item>
                <div slot="right-menu">
                    <swipeout-button type="primary" @click.native="goToOperation('return', 1)" >归还</swipeout-button>
                    <swipeout-button type="warn" @click.native="goToOperation('apply', 1)">报修</swipeout-button>
                </div>
                <div slot="content" class="property-content">
                    <div v-on:click="goToDetail(1)">
                        <flexbox class="property-attr-item">
                            <flexbox-item>类型:</flexbox-item>
                            <flexbox-item>编号:</flexbox-item>
                        </flexbox>
                        <div class="property-attr-item">
                            所属公司:
                        </div>
                    </div>
                </div>
            </swipeout-item>
        </swipeout>
    </div>
</template>
<style>
    @import url(../list.css);
</style>
<script>
    import { Swipeout, SwipeoutItem, SwipeoutButton, XButton, Flexbox, FlexboxItem } from 'vux';
    import myproperty from './myproperty';

    export default {
        data() {
            return {}
        },
        methods: myproperty.method,
        mounted() {
            console.log('我的资产');
        },
        components: { 
            Swipeout, 
            SwipeoutItem, 
            SwipeoutButton, 
            XButton,
            Flexbox,
            FlexboxItem
        }
    }
</script>