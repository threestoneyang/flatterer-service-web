/* eslint-disable */
<template>
  <d2-container class="page">
    <d2-page-cover>
      <el-input placeholder="请输入内容"
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                id="content"
                v-model="textarea2"
                ref="content"></el-input>
      <el-button v-on:click="doCopy"
                 type="primary">复制 <i class="fa fa-files-o"
           aria-hidden="true"></i></el-button>
      <el-button v-on:click="getRomdom"
                 type="warning">刷新 <i class="fa fa-smile-o"
           aria-hidden="true"></i></el-button>
      <template slot="footer">
        <div class="btn-group">
          <span class="btn-group__btn"
                @click="$open('https://github.com')">开源组织</span> |
          <span class="btn-group__btn"
                @click="$open('https://www.zhihu.com/people/shi-tou-jian-zi-bu-46/activities')">知乎</span> |
          <span class="btn-group__btn"
                @click="$open('http://blog.csdn.net/qq_28479871')">CSDN</span> |
          <span class="btn-group__btn"
                @click="$open('https://read.douban.com/author/63764350/')">
            <d2-icon name="book" />木三石</span> |
          <el-popover :width="172"
                      trigger="hover">
            <p class="d2-mt-0 d2-mb-10">741973757@qq.com</p>
            <span slot="reference"
                  class="btn-group__btn btn-group__btn--link">
              <d2-icon name="paper-plane" />
              投稿
            </span>
          </el-popover>|
          <el-popover :width="172"
                      trigger="hover">
            <p class="d2-mt-0 d2-mb-10">南方的卡夫卡</p>
            <img src="./image/qr@2x.jpg"
                 style="width: 172px;">
            <span slot="reference"
                  class="btn-group__btn btn-group__btn--link">
              <d2-icon name="weixin" />
              微信公众号
            </span>
          </el-popover>
        </div>
      </template>
    </d2-page-cover>
  </d2-container>
</template>

<script>
import D2PageCover from '../../system/index/components/d2-page-cover'
import { getFuckinfo } from '@/api/fuckinfo'
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
export default {
  name: 'fuckinfo',
  components: {
    D2PageCover
  },
  data () {
    return {
    }
  },
  methods: {
    getRomdom () {
      getFuckinfo()
        .then(async res => {
          console.log(res)
          this.$refs.content.value = res.content
        })
        .catch(error => {
          console.log(error)
        })
    },
    doCopy () {
      console.log('copycopy')
      this.$copyText(this.$refs.content.value).then((e) => {
        // success
        console.log(e)
      }, (e) => {
        // fail
        console.log(e)
      })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created () {
    console.log('初始化页面。。。。。。。。。。。。。。')
    getFuckinfo()
      .then(async res => {
        console.log(res)
        this.$refs.content.value = res.content
      })
      .catch(error => {
        console.log(error)
      })
  }

}

</script>

<style lang="scss" scoped>
.page {
  .logo {
    width: 120px;
  }
  .btn-group {
    color: $color-text-placehoder;
    font-size: 12px;
    margin-top: 0px;
    margin-bottom: 20px;
    .btn-group__btn {
      color: $color-text-sub;
      &:hover {
        color: $color-text-main;
      }
      &.btn-group__btn--link {
        color: $color-primary;
      }
    }
  }
}
</style>
