<template>
  <div>
      <el-row :gutter="10">
        <!-- 楼宇选择区域 -->
        <!-- 查询区域 -->
      </el-row>
    <!-- 面包屑导航区域 -->

    <!-- 卡片视图区域 -->
      <!-- 搜索区域 -->

      <!-- 教室数据区域 -->

<!--      已废弃-->

      <!-- 分页 -->
      <el-upload
:multiple="false"
:auto-upload="true"
:http-request="uploadFile"
accept=".xls,.xlsx">
<el-button
size="small"
type="primary"
>导⼊Excel⽂件
<i class="el-icon-upload"/>
</el-button>
</el-upload>
  <p></p>
        <el-col :span="4">
          <el-button type="primary" @click="flush()">自动排课</el-button>
        </el-col>

  </div>

</template>


<script>
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import * as echarts from 'echarts'  
export default {
  name: "Classroom_Basic",
      data () {
        return {

        }

            },


  methods: {
  uploadFile(item){
    const fileObj = item.file
    let msgForm = new FormData()
    msgForm.append('file',fileObj)
    msgForm.get("file")
    console.log(msgForm)
    var url = '/Upload_Courses';
      this.axios.post(url,msgForm,{
        headers:{'Content-Type':'multipart/form-data'}
      }).then(res => {
          console.log("看这里！")
          console.log(res.data)
      }).catch(error => {
        console.log(error)
      })
  },
  flush(){
      console.log("flush")
      var url = '/Scheduling';
      this.axios.post(url).then(res => {
          console.log("看这里！")
          console.log(res.data)
      }).catch(error => {
        console.log(error)
      })
  }
  }

}
</script>

<style lang="less" scoped>
.el-table {
  margin-top: 15px;
}
/deep/ .el-switch__label {
  position: absolute;
  display: none;
  color: #fff;
}
/deep/ .el-switch__label--left {
  z-index: 9;
  left: 25px;
}
/deep/ .el-switch__label--right {
  z-index: 9;
  left: -2px;
}
/deep/ .el-switch__label.is-active {
  display: block;
}
/deep/ .el-switch.is-checked .el-switch__core::after {
  left: 94%;
}
/deep/ .el-switch .el-switch__core,.el-switch .el-switch__label {
  width: 48px !important;
  height: 22px !important;
}
/deep/ .el-switch__core{
  // border-radius:15px;
  &:after{
    width:20px;
    height:20px;
    top:0px;
    // left:3px;
    // z-index:10;
  }
}
/deep/ .el-switch__label.is-active {
  color: #ffffff;
}
#myChart{
  width: 100%;
  height: 500px;
  margin: 0 auto;
  margin-top: 5%;
}
</style>
