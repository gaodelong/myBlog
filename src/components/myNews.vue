<template>
    <div class="news"> 
        <div class="head">
            <h2>My Notes</h2>
            <p>记录代码的点点滴滴</p>
        </div>
        <div class="content">
            <el-row :gutter="20" class="articleList">
                <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="4" v-for="(item,index) in articleTotals" :key="index">
                    <a class="card">
                        <div class="image">
                            <img :src= "item.img"  alt="">
                        </div>
                        <div class="box">
                            <p class="article_title" :title="item.article_title">{{item.article_title}}</p>
                            <p class="date">{{item.date}}</p>
                            <p class="description" :title="item.description">{{item.description}}</p>
                            <p class="article_foot">
                                <span class="tag">
                                    <i class="tag_type">{{Object.values(item.tag_type).join('、')}}</i>
                                </span>
                                <span class="read_more fr">阅读全文</span>
                            </p>
                        </div>
                    </a>
                </el-col>
            </el-row>
            <div class="foot">
                <el-pagination
                    layout="prev, pager, next"
                    :total="1000">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {	
        return {
            // 文章类型
            tag_type: [],
            // 文章总条数
            articleTotals : [
                {
                    img: "http://ouvwmmux2.bkt.clouddn.com/js.jpg",
                    article_title: "Vue入门学习1",
                    date: "2018-5-1",
                    description: "Vue是一套用于构建用户界面的渐进式框架1",
                    tag_type:  {
                        tag_html: "js"
                    },
                     
                },
                {
                    img: "http://ouvwmmux2.bkt.clouddn.com/js.jpg",
                    article_title: "Vue入门学习2",
                    date: "2018-5-2",
                    description: "Vue是一套用于构建用户界面的渐进式框架2",
                    tag_type:{
                        tag_html: "html",
                    }
                },
                {
                    img: "http://ouvwmmux2.bkt.clouddn.com/js.jpg",
                    article_title: "Vue入门学习3",
                    date: "2018-5-3",
                    description: "Vue是一套用于构建用户界面的渐进式框架3",
                    tag_type: {
                        tag_webpack: "js"
                    }
                },
                {
                    img: "http://ouvwmmux2.bkt.clouddn.com/js.jpg",
                    article_title: "Vue入门学习4",
                    date: "2018-5-4",
                    description: "Vue是一套用于构建用户界面的渐进式框架4",
                    tag_type: {
                        tag_reprint: "转载"
                    }
                },
                {
                    img: "http://ouvwmmux2.bkt.clouddn.com/js.jpg",
                    article_title: "Vue入门学习5",
                    date: "2018-5-5",
                    description: "Vue是一套用于构建用户界面的渐进式框架5",
                    tag_type: {
                        tag_other: "其他"
                    }
                },
                {
                    img: "http://ouvwmmux2.bkt.clouddn.com/js.jpg",
                    article_title: "Vue入门学习6",
                    date: "2018-5-6",
                    description: "Vue是一套用于构建用户界面的渐进式框架6",
                    tag_type: {
                        tag_vue: "vue"
                    }
                },
                {
                    img: "http://ouvwmmux2.bkt.clouddn.com/js.jpg",
                    article_title: "Vue入门学习1",
                    date: "2018-5-1",
                    description: "Vue是一套用于构建用户界面的渐进式框架1",
                    tag_type:  {
                        tag_html: "js"
                    },
                     
                },
                {
                    img: "http://ouvwmmux2.bkt.clouddn.com/js.jpg",
                    article_title: "Vue入门学习2",
                    date: "2018-5-2",
                    description: "Vue是一套用于构建用户界面的渐进式框架2",
                    tag_type:{
                        tag_html: "html",
                    }
                },
                {
                    img: "http://ouvwmmux2.bkt.clouddn.com/js.jpg",
                    article_title: "Vue入门学习3",
                    date: "2018-5-3",
                    description: "Vue是一套用于构建用户界面的渐进式框架3",
                    tag_type: {
                        tag_webpack: "js"
                    }
                },
                {
                    img: "http://ouvwmmux2.bkt.clouddn.com/js.jpg",
                    article_title: "Vue入门学习4",
                    date: "2018-5-4",
                    description: "Vue是一套用于构建用户界面的渐进式框架4",
                    tag_type: {
                        tag_reprint: "转载"
                    }
                },
                {
                    img: "http://ouvwmmux2.bkt.clouddn.com/js.jpg",
                    article_title: "Vue入门学习5",
                    date: "2018-5-5",
                    description: "Vue是一套用于构建用户界面的渐进式框架5",
                    tag_type: {
                        tag_other: "其他"
                    }
                },
                {
                    img: "http://ouvwmmux2.bkt.clouddn.com/js.jpg",
                    article_title: "Vue入门学习6",
                    date: "2018-5-6",
                    description: "Vue是一套用于构建用户界面的渐进式框架6",
                    tag_type: {
                        tag_vue: "vue"
                    }
                },
            ],
        }
    },
    computed: {
        // 文章当前时间
        currentDate:  function (){ 
            /**
             * 获取当前时间
             * 格式YYYY-MM-DD
             */
            var date = new Date();
            var seperator1 = "-";
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = year + seperator1 + month + seperator1 + strDate;
            return currentdate;
        }
    },
    methods: {
        fnTag_type: function () { 
            
        },

    }
}
</script>

<style scoped>
    .news{
        padding: 0 2em;
    }
    .news .head{
        padding-top: 2em;
    }
    .news .head h2{
        font-size: 3em;
        color: #42B8F1;
        user-select: none;
    }
    .news .head p{
        margin-top: 0.5em;
        font-size: 1.28em;
        letter-spacing: 0.1em;
    }
    .news .content{
        margin-top: 3em;
    }
    .news .foot{
        text-align: right;
    }
    .news .content .el-col{
        margin-bottom:2.1em;
    }
    .news .content .el-col a.card{
        display: block;
        width: 100%;
        height: 100%;
        box-shadow: 0 2px 20px 2px rgba(0,0,0,0.12);
        transition: box-shadow 500ms ease-in-out, transform 500ms ease-in-out;
    }
    .news .content .el-col a.card:hover{
        box-shadow: 0 10px 20px 3px rgba(0,0,0,0.18);
        -ms-transform: scale(1.05);
        transform: scale(1.005);
    }
    .news .content .el-col a.card .image{
        border:none;
        border-radius: .28571429rem .28571429rem 0 0!important;
    }
    .news .content .el-col a.card .image img{
        display: block;
        height: auto;
        /* height: 130px; */
        width: 100%;
        /* max-width: 300px; */
        max-height: 155px;
        border-radius: inherit;
    }  
    .news .content .el-col a.card .box {
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        border: none;
        /* border: 1px solid #D4D4D5; */
        border-top-color:rgba(34,36,38,.1);
        border-radius: 0 0 .28571429rem .28571429rem!important;
        color:rgba(0,0,0,.85);
        background: 0 0;
        margin: 0;
        padding: 1em 1em;
        box-shadow: none;
        font-size: 1em;
        border-radius: 0;
        text-align: left;
    }
    .news .content .el-col a.card .box p{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        /* height: 32px; */
    }
    .news .content .el-col a.card .box p.article_title{
        /* width: 90%; */
        font-weight: 700;
        font-size: 1.38571429em;
        margin-top: -.21425em;
        height: 1.3em;
    }
    .news .content .el-col a.card .box p.date{
        margin-top: 0.3em;
        font-size: 1.2em;
        color: #656565;
        height: 1.3em;

    }
    .news .content .el-col a.card .box p.description{
        width: 100%;
        margin-top: 0.5em;
        font-size: 1.2em;
        color: rgba(0,0,0,.7);
    }
    .news .content .el-col a.card .box p.article_foot{
        padding-top: 1em;
        height: 3em;
    }
    .news .content .el-col a.card .box p.article_foot span{
        display: inline-block;
        vertical-align: top;
        font-size: 1.2em;
    }    
    .news .content .el-col a.card .box p.article_foot .tag_type{
        display: inline-block;
        vertical-align: top;
        padding: 0.07em 0.597em;
        border-radius: 0.2em;
        /* color: #fff; */
        color: red;
    }
    /* js 标签 */
    .news .content .el-col a.card .box p.article_foot .tag_type.tag_js{
        background: #40b0ff;
    } 
    /* css 标签 */
    .news .content .el-col a.card .box p.article_foot .tag_type.tag_css{
        background: #ffa900;
    }    
    /* html 标签 */
    .news .content .el-col a.card .box p.article_foot .tag_type.tag_html{
        background: #6ebd6b;
    }    
    /* vue 标签 */    
    .news .content .el-col a.card .box p.article_foot .tag_type.tag_vue{
        background: #00a99d;
    }   
    /*webpack 标签 */     
    .news .content .el-col a.card .box p.article_foot .tag_type.tag_webpack{
        background: #b062a3;
    }    
    /* 转载 标签 */
    .news .content .el-col a.card .box p.article_foot .tag_type.tag_reprint {
        background: #00528e;
    }  
    /* 其他 标签 */
    .news .content .el-col a.card .box p.article_foot .tag_type.tag_other{
        background: #a68369;
    }    
    .news .content .el-col a.card .box p.article_foot .read_more{
        color: #737373;
    }
    .news .content .el-col a.card .box p.article_foot .read_more:hover,
    .news .content .el-col a.card .box p.article_foot .read_more:active{
        text-decoration: underline
    
    }
</style>