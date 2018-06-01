<template>
<div class="banner">
    <div class="bannerBg" :style="{height: clientHeight}" ></div>
    <div class="title" :class="{small: issmall}"></div>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            issmall:false ,     //小屏
            clientHeight: "768px",  //bannerbg最大高度 
        }
    },
    methods: {
    },
    mounted() {
        const that = this;
        const _height = document.documentElement.clientHeight; //浏览器高度
        const _width = document.documentElement.clientWidth; //浏览器宽度
        console.log("窗口大小:"+_width);
        
        //窗口高度变化
        if (_height <= 768) {
            that.clientHeight = _height;
        }else{
            that.clientHeight = "768px"
        }
        //窗口宽度变化
        if (_width <= 1024) {
            that.issmall = true;
            
        }else{
            that.issmall = false
        }
    }
}
</script>

<style scoped>
.banner {
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.banner .bannerBg {
    width: 100%;
    background: url(/static/image/bg.jpg) no-repeat center center;
    background-size: cover;
    transform: translateY(0px);
    -webkit-transition: all 2s cubic-bezier(0.215, 0.61, 0.355, 1) .4s;
    -moz-transition: all 2s cubic-bezier(0.215, 0.61, 0.355, 1) .4s;
    transition: all 2s cubic-bezier(0.215, 0.61, 0.355, 1) .4s;
}


.banner .bannerBg:hover{
        -webkit-transform: translateY(-100px);
        -moz-transform: translateY(-100px);
        transform: translateY(-100px);
        z-index: 1;
    }

.banner .title {
    position: absolute;
    left: 50%;
    top: 42%;
    width: 75%;
    height: 191px;
    -webkit-transform: translate3d(-50%,-50%,0);
    transform: translate3d(-50%,-50%,0);
    margin-left: -10%;
    background: url(/static/image/titleBg.png) no-repeat center center;
    background-size: contain;
}
.banner .title.small{
    width: 100%;
    margin:0;
    -webkit-transform: translate3d(-50%,-50%,0) scale(.9);
    transform: translate3d(-50%,-50%,0) scale(.9);
}
</style>