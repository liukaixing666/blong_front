<template>
  <el-table
    :data="tableData5"
    style="width: 100%">
    <el-table-column type="expand">
      <template scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
         <template>
            <el-table
            :data="props.row.twodata"
            style="width: 100%">
            <el-table-column type="expand">
                <template scope="props">
                  <el-form label-position="left" inline class="demo-table-expand">
                 
                  </el-form>
                </template>
            </el-table-column>
            <el-table-column
                prop="enname"
                label="英文"
                width="180">
            </el-table-column>
            <el-table-column
                prop="cnname"
                label="中文"
                width="180">
            </el-table-column>
           
            </el-table>
        </template>
</el-form>
</template>
</el-table-column>
<el-table-column label="商品 ID" prop="onedata.enname">
</el-table-column>
<el-table-column label="商品名称" prop="onedata.cnname">
</el-table-column>
<el-table-column label="操作">
    
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
    
    table {
        width: 620px;
    }
    
    .el-table__body-wrapper {
        width: 700px;
    }
</style>

<script>
    export default {
        data() {
            return {
                tableData5: [],
                tableData: [],
                enname:''
            }
        },
        created() {
            const _this=this;
            this.axios.get('/api/back_class/class_list').then((data) => {   
                _this.tableData5=data.data.data;
            })
        }
    }
</script>