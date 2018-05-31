<template>
<EasyScrollbar :barOption="myBarOption">
  <el-row>
    <el-col :span="24">
      <div class="main">
        <!-- 第一屏  banner -->
        <my-banner></my-banner>
        <el-container>
          <el-main>
            <!-- 第二屏 news 文章 -->
            <my-news></my-news>
            <!-- 第三屏 works 作品 -->
            <my-works></my-works>
          </el-main>
        </el-container>
        <!-- 第四屏 -->
        <el-footer></el-footer>
      </div>
    </el-col>
  </el-row>

</EasyScrollbar>
</template>

<script>
import myBanner from './myBanner'
import myNews from './myNews'
import myWorks from './myWorks'
import elFooter from './elFooter'
export default {
  components: {
    myBanner,
    myNews,
    myWorks,
    elFooter
  },
  data() {
    return {
      myBarOption: {
        barColor: "rgb(149, 149, 149,0.6)", //滚动条颜色
        barWidth: 6, //滚动条宽度
        railColor: "#eee", //导轨颜色
        barMarginRight: 0, //垂直滚动条距离整个容器右侧距离单位（px）
        barMaginBottom: 0, //水平滚动条距离底部距离单位（px)
        barOpacityMin: 0.3, //滚动条非激活状态下的透明度
        zIndex: "auto", //滚动条z-Index
        autohidemode: true, //自动隐藏模式
        horizrailenabled: true, //是否显示水平滚动条

      }
    }
  },
  methods: {
    // 获取浏览器窗口大小设置scroll高度
    scrollHeight() {
      let _height = document.documentElement.clientHeight; //浏览器高度
      $('.main').css('height', _height + 'px');
    }
  },
  mounted() {
    this.scrollHeight();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  width: calc(100% - 6px);
}
.main .el-container{
  background: #fff;
}
.main .el-main{
  padding: 1.8em 0;
}
</style>
