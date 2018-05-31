<template>
    <el-footer>
        <div class="contactMe">
            <ul>
                <li>
                    <label>gitHub：</label>
                    <a href="https://github.com/gaodelong" target="_blank">https://github.com/gaodelong</a>
                </li>
                <li>
                    <label>邮箱：</label>
                    <span>delong@126.cn</span>
                </li>
            </ul>
        </div>
    </el-footer>
</template>

<script>
export default {
    data: function() {	
        return {

        }
    },
    methods: {}
}
</script>

<style scoped>
    .el-footer{
        height: 4em !important;
        background: #fff;
    }
    .contactMe ul li{
        height: 2em;
        line-height: 2em;
        text-align: center
    }
    .contactMe ul li label,.contactMe ul li span,.contactMe ul li a{
        display: inline-block;
        vertical-align: top;
    }

</style>