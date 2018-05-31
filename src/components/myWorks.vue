<template>
<div class="works">
    <div class="head">
        <h2>Works Show</h2>
        <p>工作学习中整理的些项目</p>
    </div>
    <div class="content">
        <el-carousel indicator-position="outside" :interval="10000"  trigger="click">
            <el-carousel-item v-for="(item,index) in listData" :key="index">
                <!-- {{item}} -->
                <el-row :gutter="20" class="workList">
                    <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" v-for="(it,i) in item" :key="i">
                        <a href="javascript:" class="workLink" @mouseover ="enter(i)" @mouseleave="leave()">
                            <img :src="it.img">
                            <div :class="{imgTitle: i == showHide}" :style="enterStyle">
                                {{it.titleTxt}}
                            </div>
                        </a>
                    </el-col>
                </el-row>
            </el-carousel-item>
        </el-carousel>
    </div>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            // 图片title
            showHide: -1,
            // 轮播每页显示数组
            listData: [],
            //轮播图页数
            colNumber: null,
            //项目总数
            workTotals: [
                {
                    list: [
                        {img: "http://designzhangyu.com/uploadfile/2015/0623/20150623050946259.jpg",titleTxt: "项目1"},
                        {img: "http://designzhangyu.com/uploadfile/2015/0623/20150623050946259.jpg",titleTxt: "项目2"},
                        {img: "http://designzhangyu.com/uploadfile/2015/0623/20150623050946259.jpg",titleTxt: "项目3"},
                        {img: "http://designzhangyu.com/uploadfile/2015/0623/20150623050946259.jpg",titleTxt: "项目4"},
                        {img: "http://designzhangyu.com/uploadfile/2015/0623/20150623050946259.jpg",titleTxt: "项目5"},
                        {img: "http://designzhangyu.com/uploadfile/2015/0623/20150623050946259.jpg",titleTxt: "项目6"},
                        {img: "http://designzhangyu.com/uploadfile/2015/0623/20150623050946259.jpg",titleTxt: "项目7"},
                        {img: "http://designzhangyu.com/uploadfile/2015/0623/20150623050946259.jpg",titleTxt: "项目8"},
                        {img: "http://designzhangyu.com/uploadfile/2015/0623/20150623050946259.jpg",titleTxt: "项目9"},
                        {img: "http://designzhangyu.com/uploadfile/2015/0623/20150623050946259.jpg",titleTxt: "项目10"},
                        {img: "http://designzhangyu.com/uploadfile/2015/0623/20150623050946259.jpg",titleTxt: "项目11"},
                        {img: "http://designzhangyu.com/uploadfile/2015/0623/20150623050946259.jpg",titleTxt: "项目12"},
                    ]
                }
                
            ],
            // 图片title 的style
            enterStyle: {
                bottom: -50 +'px'
            },
            clientHeight: "1366px" //默认窗口宽度大小
        }
    },
    methods: {
        //鼠标hover
        enter(e){
            this.showHide = e;
            this.enterStyle.bottom = 0 +'px';
        },
        //鼠标离开hover
        leave(){ 
            this.showHide = -1;
        },
        //col 的个数
        fnColNumber() {
            //浏览器宽度
            let _width = document.documentElement.clientWidth;
            // console.log(this.workTotals.length);

            if (1920 <= _width) {
                /* 
                 *  分辨率 xl >= 1920px
                 *  显示 6个
                 */
                //向上取整
                this.colNumber = Math.ceil(this.workTotals[0].list.length / 6);
                console.log("屏幕宽度:大于1920")
            }
            if (1200 <= _width && _width < 1920) {
                /*
                 *   分辨率 lg >= 1200px
                 *   显示 4个
                 */
                //向上取整
                this.colNumber = Math.ceil(this.workTotals[0].list.length / 4);
                console.log("屏幕宽度:1200--1920")
            }
            if (992 <= _width && _width < 1200) {
                /*
                 *   分辨率 md >= 992px 
                 *   显示 3个
                 */
                //向上取整
                this.colNumber = Math.ceil(this.workTotals[0].list.length / 3);
                console.log("屏幕宽度:992--1200")
            }
            if (768 <= _width && _width < 992) {

                /*
                 *   分辨率 sm >= 768px  
                 *   显示 2个
                 */
                //向上取整
                this.colNumber = Math.ceil(this.workTotals[0].list.length / 2);
                console.log("屏幕宽度:768--992")

            }
            if (_width < 768) {
                //向上取整
                this.colNumber = Math.ceil(this.workTotals[0].list.length / 1);
                console.log("屏幕宽度:小于768")
            }
            this.split_array(this.workTotals[0].list,this.colNumber);
        },
        
        //计算每页展示number函数 
        split_array(arr,len) {
            console.log(arr,len,this.colNumber);
            var a_len = arr.length;
            for(let i = 0; i < a_len; i += (a_len/this.colNumber)){
                this.listData.push(this.workTotals[0].list.slice(i,i+(a_len/this.colNumber)));
            }
            console.log(this.listData);
            
            return this.listData;
        }
    },
    mounted() {
        this.fnColNumber();
    },
}
</script>

<style scoped>
.el-carousel__item {
    padding: 0 5.16666em;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}
.works {
    margin-top: 3em;
    padding: 0 4.16666em 8em;
    background: #212325;
}

.works .head {
    padding-top: 3em;
}

.works .head h2 {
    font-size: 4em;
    color: #42B8F1;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.works .head p {
    margin-top: 0.5em;
    font-size: 1.28em;
    letter-spacing: 0.1em;
    color: #A6A6A7
}

.works .content {
    margin-top: 3em;
}

.works .content .workList {
    height: 100%;
}

.works .content .workList .el-col {
    height: 100%;
}
.works .content .workList .el-col a.workLink{
    position: relative;
    display: block;
    width: 264px;
    height: 180px;
}
.works .content .workList .el-col .workLink img{
    display: block;
    width: 264px;
    height: 180px;
    border-radius: 10px;
}
.works .content .workList .el-col .workLink .imgTitle{
    position: absolute;
    bottom:-50px;
    left: 0;
    height: 2em;
    line-height: 2em;
    width: 264px;
    text-align: center;
    background: #42B8F1;
    color: #fff;
    transition: all .5s;
    z-index: 11;
}
</style>