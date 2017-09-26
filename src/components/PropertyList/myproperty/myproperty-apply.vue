<template>
    <div>
        <div class="textarea-warp">
            <x-textarea :max="100" :placeholder="请填写报修原因"></x-textarea>
        </div>
        <div class="btn-group">
            <x-button type="warn" @click.native="">报修</x-button>
        </div>
    </div>
</template>
<style>
    @import url(../list.css);
</style>
<script>
    import { XButton, XTextarea } from 'vux';
    
    export default {
        components: {
            XTextarea,
            XButton
        }
    }
</script>