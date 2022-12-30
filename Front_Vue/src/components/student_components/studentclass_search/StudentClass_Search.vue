<template>
  <div>
    <!-- 面包屑导航区域 -->
    <Breadcrumb name1="教室管理" name2="教室课程信息" />
    <!-- 卡片视图区域 -->
    <el-card class="box-card">
      <!-- 搜索区域 -->
      <el-row :gutter="10">
        <!-- 楼宇选择区域 -->
        <!-- <el-col :span="6">
          <div class="block">
            <el-cascader
                :options="options"
                :props="{ checkStrictly: false }"
                clearable filterable></el-cascader>
          </div>
        </el-col> -->
        <!-- 查询区域 -->
        <el-col :span="4">
          <el-button type="primary" @click="flush()">查询</el-button>
        </el-col>
      </el-row>
      <!-- 教室数据区域 -->
      <el-table :data="courselist" stripe style="width: 100%" border>
        <el-table-column type="index" label="#"></el-table-column>
        
        <!-- <el-table-column prop="campusName" label="校区"></el-table-column> -->
        <el-table-column prop="1" label="周一" ></el-table-column>
        <el-table-column prop="2" label="周二" ></el-table-column>
        <el-table-column prop="3" label="周三" ></el-table-column>
        <el-table-column prop="4" label="周四" ></el-table-column>
        <el-table-column prop="5" label="周五" ></el-table-column>
        <el-table-column prop="6" label="周六" ></el-table-column>
        <el-table-column prop="7" label="周日" ></el-table-column>
      
      </el-table>

    </el-card>
  </div>
</template>

<script>
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
export default {
  name: "Classroom_Basic",
  methods: {
    flush(){
      var optype = 'student'
      var url = '/ClassroomShowCourse';
    //   this.axios.post(url, "username="+username+"&password="+password+"&usertype="+usertype
      this.axios.post(url,"username="+this.username+"&oprtype="+optype).then(res => {
          console.log("看这里！")
          console.log(res.data)
          console.log(typeof(res.data))
          // this.courselist = res.data
          // this.$message.error(res.msg)


          var courselist_temp = new Array();
           for (let i = 0; i < Object.keys(res.data).length; i++) {
              courselist_temp.push(res.data[i+1])
           }
           this.courselist=courselist_temp

        
      })
     },

   },

  data(){
    return{
        courselist : [
        {
          "节数":"第一节",
          "1":"数学",
          "2":"",
          "3":"",
          "4":"",
          "5":""
        },
        {
          "节数":"第二节",
          "1":"",
          "2":"语文",
          "3":"",
          "4":"",
          "5":""
        },
        {
          "节数":"第三节",
          "1":"",
          "2":"",
          "3":"英文",
          "4":"",
          "5":""          
        },
        {
          "节数":"第四节",
          "1":"",
          "2":"",
          "3":"",
          "4":"物理",
          "5":""          
        },
        {
          "节数":"第五节",
          "1":"",
          "2":"",
          "3":"",
          "4":"",
          "5":"化学"          
        },
        {
          "节数":"第六节",
          "1":"",
          "2":"",
          "3":"",
          "4":"",
          "5":"计算机"          
        },
      ],
      username: this.$route.params["username"],
     
     
      }
      },
    
  components: {
    //面包屑组件
    Breadcrumb
  },

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
</style>