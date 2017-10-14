<template>
    <div>
    <el-table :data="alldata" style="width: 100%" :row-class-name="tableRowClassName" @row-dblclick.self="clickfn">
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="email" label="邮箱" width="180">
        </el-table-column>
        <el-table-column prop="time" label="时间" width="300">
        </el-table-column>
         </el-table-column>
        <el-table-column prop="content" label="内容" width="300">
        </el-table-column>
        
    </el-table>
    </div>
</template>
<script>
  export default {
        methods: {
            tableRowClassName(row, index) {
                if (index === 1) {
                    return 'info-row';
                } else if (index === 3) {
                    return 'positive-row';
                }
                return '';
            },
        
            
        },
        data() {
            return {
                alldata: [], 
                everypage: [] 
            }
        },
        mounted() {
            this.axios.get("/api/myresume/lists").then(function (data) {
                // console.log(data)
                if (data.data.code == "0322") {
                   
                    this.alldata = data.data.data
                    // console.log(this.alldata)
                  
                }

            }.bind(this))
        }
    }
</script>
<style>
</style>