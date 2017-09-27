<template>
    <div>
        <div class="textarea-warp">
            <x-textarea :max="100" placeholder="请填写归还原因"></x-textarea>
        </div>
        <div class="btn-group">
            <x-button type="primary" @click.native="">归还</x-button>
        </div> 
    </div>
</template>
<style>
    @import url(../list.css);
</style>
<script>
    import { Group, XButton, XTextarea } from 'vux';
    
    export default {
        components: {
            XTextarea,
            XButton
        }
    }
</script>