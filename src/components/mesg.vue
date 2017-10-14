<template>
    <el-table :data="alldata" style="width: 100%">
        
        <el-table-column label="标题" prop="daodu">
        </el-table-column>
        <el-table-column label="作者" prop="article_name">
        </el-table-column>
        <el-table-column label="时间" prop="time">
        </el-table-column>
    </el-table>
</template>

<style>
    .demo-table-expand {
        font-size: 0;
    }

    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }

    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>

<script>
    export default {
        data() {
            return {

                alldata: [],
            }

        },
        mounted() {
            this.axios.get("/api/front_article/getArticleAll").then(function (data) {
                // console.log(data)
                if (data.data.code == "6012") {

                    this.alldata = data.data.data
                    // console.log(this.alldata)

                }
            }.bind(this))
        }
    }

</script>