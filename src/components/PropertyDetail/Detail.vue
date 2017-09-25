<template>
    <div>
        <h1 class="art-title">{{ detail.title }}</h1>
        <p class="art-tx">
          发布人:&nbsp;{{ detail.author ? detail.author: '无' }}
        </p>
        <p class="art-tx">
          发布时间:&nbsp;&nbsp;{{ detail.updateTime }}
        </p>
        <div class="coverImg" v-if="detail.showCover == 1" >
          <img :src="detail.coverImgUrl" />
        </div>
        <article id="article" v-html="detail.content"></article>
        <back-home :show=true></back-home>
    </div>
</template>
<style scoped>
  .art-title {
    padding: 20px 10px 10px;
    font-size: 18px;
    color: #333;
    font-weight: normal;
  }
  .art-tx {
    padding-bottom: 5px;
    text-align: center;
    font-size: 14px;
    color: #666;
  }
  article {
    padding: 0 10px;
  }
  .coverImg {
    width: 100%;
    padding: 0 10px;
  }
  .coverImg img {
    width: 100%;
    max-width: 100%;
  }
</style>
<script>
    import BackHome from './backHome.com.vue';
    import config from '../../config';
    import api from '../../api';
    import util from '../../util';
//    import '../../assets/lib/jquery'
//    import '../../assets/lib/jquery.lazyload'

    export default {
      data () {
        return {
          detail: {}
        }
      },
      mounted () {
        const id = this.$route.params.cultureId;
        this.$ajax.get(config.baseUrl + api.getArticleDetail, {
            params: {
              articleId: id
            }
        }).then((res) =>{
          var handle = {};
          handle['author'] = res.data.data.author;
          handle['coverImgUrl'] = config.baseUrl + res.data.data.coverImgUrl;
          handle['content'] = res.data.data.content;
          handle['title'] = res.data.data.title;
          handle['showCover'] = res.data.data.showCover;
          handle['updateTime'] = util.handleTime(res.data.data.updateTime, 'yyyy-MM-dd h:mm');
          this.detail = handle;
//          this.$nextTick(()=>{
//            var article = document.querySelector("#article"),
//                images = article.querySelectorAll('img');
//                $(images).each(function() {
//                  if( !$(this).attr('data-original') ) {
//                    $(this).attr("data-original", $(this).attr('src')).attr("src", '../../assets/loading-spin.svg');
//                    $(this).attr('src', '');
//                  }
//                })
//            $(images).lazyload();
//          })
        });
      },
      components: {
        BackHome
      }
    }
</script>
