<template>
  <div>
    <!-- 面包屑导航区域 -->
    <Breadcrumb name1="教室查询" name2="教室查询及预约" />
    <!-- 卡片视图区域 -->
    <el-card class="box-card">
      <!-- 搜索区域 -->
      <el-row :gutter="10">
        <!-- 楼宇选择区域 -->
        <el-col :span="6">
          <div class="block">
            <el-cascader
                :options="options"
                :props="{ checkStrictly: false }"
                clearable filterable></el-cascader>
          </div>
        </el-col>
        <!-- 查询区域 -->
        <el-col :span="4">
          <el-button type="primary">查询</el-button>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="require_classroomdetails()">教室使用信息查询</el-button>
        </el-col>
      </el-row>
      <!-- 教室数据区域 -->
      <el-table :data="classroomData.classroomList" stripe style="width: 100%" border>
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column prop="buildingName" label="楼宇名字"></el-table-column>
        <el-table-column prop="classroomName" label="教室编号"></el-table-column>
        <el-table-column label="空闲状态" >
          <template slot-scope="scope">
              <img slot="reference" :src="scope.row.state === 0 ? require('../../../assets/empty.png') : require('../../../assets/not_empty.png')" style="width: 30px;height: 30px">
          </template>

        </el-table-column>

        <el-table-column prop="attribute" label="属性"></el-table-column>


        <!-- <el-table-column prop="attribute" label="属性">
          <template slot-scope="scope">
              <el-select v-model="scope.row.value" placeholder="请选择">
                <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
          </template>
        </el-table-column> -->
        <!-- <el-table-column label="智能模式">
          <template v-slot="scope">
            <el-switch v-model="scope.row.state.web_state.web_ctrl"
                       active-color="#13ce66"
                       inactive-color="#ff4949"
                       active-text="是"
                       inactive-text="否"
                       :inactive-value = true
                       :active-value = false
                       :width=60
                       @change="switchChange($event)"> </el-switch>
          </template>
        </el-table-column> -->
        <el-table-column prop="remark" label="备注"></el-table-column>
        <el-table-column label="操作" width="180px">
          <template v-slot="scope">
            <!-- 修改按钮 -->
            <el-tooltip effect="dark" content="预约" placement="top" :enterable="false">
              <el-button type="primary" icon="el-icon-date" size="mini" @click="makeAppointment(scope.row.buildingName,scope.row.classroomName)"></el-button>
            </el-tooltip>
            <!-- 删除按钮 -->
            <!-- <el-tooltip effect="dark" content="删除" placement="top" :enterable="false">
              <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeUserById(scope.row.id)"></el-button>
            </el-tooltip> -->
            <!-- 查看按钮 -->
            <el-tooltip effect="dark" content="查询" placement="top" :enterable="false">
              <el-button type="success" icon="el-icon-search" size="mini" @click="showClassroomRequire(scope.row)"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
<!--      已废弃-->
      <!-- <el-dialog
          :visible.sync="showClassroomSate"
          width="15%"
      >
        <el-descriptions title="教室信息" :column="1">
          <el-descriptions-item label="湿度" span="1">{{this.classroomData.classroomList[1].state.Humidity}}</el-descriptions-item>
          <el-descriptions-item label="温度">{{this.classroomData.classroomList[1].state.Temperature}}</el-descriptions-item>
          <el-descriptions-item label="火灾情况">{{this.classroomData.classroomList[1].state.fire_state === "safe" ? "安全":"火灾发生" }}</el-descriptions-item>
          <el-descriptions-item label="烟雾情况">{{this.classroomData.classroomList[1].state.smoke_state === "safe" ? "安全":"烟雾危害"}}</el-descriptions-item>
          <el-descriptions-item label="教室总人数">{{this.classroomData.classroomList[1].state.deep_state.have_person.person_nums}}</el-descriptions-item>
        </el-descriptions>
        <span slot="footer" class="dialog-footer">
  </span>
      </el-dialog> -->
      <!-- 分页 -->
      <!-- <el-pagination
          @current-change="handleCurrentChange"
          :current-page="queryInfo.pagenum"
          @size-change="handleSizeChange"
          :page-size="queryInfo.pagesize"
          :page-sizes="[2, 5, 15]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="classroomData.total"
      >
      </el-pagination> -->
    </el-card>

  </div>
</template>

<script>
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
export default {
  name: "TeacherClassroom_Use",
  methods: {
    //智能模式切换调用send方法
    // async switchChange(val) {
    //   console.log(val)
    //   console.log(this.$data.state)
    //   this.state.web_state.web_ctrl = !val;
    //   console.log("web的状态");
    //   console.log(this.state.web_state);
    //   await this.send()
    // },
    //初始化获得classroom数据
    getClassroomList(){
      console.log(this)
      console.log("获取")
      this.$message.success('获取楼宇列表成功!')
    },
    //测试方法
    // test(){
    //   console.log(this.state)
    // },
    //点击按钮查看教室信息
    // showClassroomDetail(){
    //   //点击跳转到详情界面
    //   //编程式导航实现页面跳转
    //   this.$router.push('/detail')
    //   //把对话框弹出
    //   // this.showClassroomSate = true;
    //   // this.request();
    // },
    // 监听 pagesize 改变事件 每页显示的个数
    handleSizeChange(newSize) {
      console.log(newSize)
      this.queryInfo.pagesize = newSize
      this.getUserList()
    },
    // 监听 页码值 改变的事件 当前页面值
    handleCurrentChange(newPage) {
      console.log(newPage)
      this.queryInfo.pagenum = newPage
      this.getUserList()
    },

    makeAppointment(buildingName, classroomName) {
      // console.log(this.$route.path)
      var json_test =  [
          {
            "buildingName": buildingName,
            "room_number": classroomName,
            "input":"",
            "input":"",
            "input":"",
            "input":"",
            "input":""
          }
        ]
      
      this.$router.push({ name: 'studentclassrooms_order', params: {json_test}})
    //   this.$router.push({ name: 'studentcampus'})

    },
    showClassroomRequire(row) {
      console.log(row.buildingName)
      console.log(row.classroomName)
      // console.log(this.$route.path)

      var json_test =  [
          {
            "date": "10",
            "st_time": "1:00",
            "end_time":"3:00",
            "user":"陈鹏",
            "remark":"上课"
          }
        ]

      this.$router.push({ name: 'studentclassrooms_require', params: {json_test}})

    }

  },

  data(){
    return{
         classroomData:{
            classroomList: [
          {
            "id": 1,
           
            "buildingName": "教学楼",
            "classroomName":201,
            "empty_state": 1,
            "value": '教学',
            "auto_state": true, //true时为智能模式
            "remark":"空闲",
            "attribute":"物理实验",
            "address": "https://myblogimgbed.oss-cn-shenzhen.aliyuncs.com/img/empty.png",
            "create_time": "2017-11-09T20:36:26.000Z",
            "state": 0
          },
            //第二个是测试的教室
          {
            "id": 2,
            // "campusName": "大学城校区",
            "buildingName": "教学楼",
            "classroomName":202,
            "empty_state": "not_empty",
            "value": '教学',
            "auto_state": true, //true时为智能模式
            "remark":"上课",
            "attribute":"数学实验",
            "address": "https://myblogimgbed.oss-cn-shenzhen.aliyuncs.com/img/not_empty.png",
            "create_time": "2017-11-09T20:36:26.000Z",
            "state": 1
           
          },
          {
            "id": 3,
          
            "buildingName": "机电楼",
            "classroomName":203,
            "empty_state": "empty",
            "value": '教学',
            "auto_state": true, //true时为智能模式
            "remark":"空闲",
            "attribute":"计算机实验",
            "address": "https://myblogimgbed.oss-cn-shenzhen.aliyuncs.com/img/empty.png",
            "create_time": "2017-11-09T20:36:26.000Z",
            "state": 0
         
          },
          {
            "id": 4,
            
            "buildingName": "实验楼",
            "classroomName":204,
            "empty_state": "empty",
            "value": '教学',
            "auto_state": true, //true时为智能模式
            "remark":"空闲",
            "attribute":"教学",
            "address": "https://myblogimgbed.oss-cn-shenzhen.aliyuncs.com/img/empty.png",
            "create_time": "2017-11-09T20:36:26.000Z",
            "state": 0
      
          },
          {
            "id": 5,
            "buildingName": "机电楼",
            "classroomName":205,
            "empty_state": "empty",
            "value": '教学',
            "auto_state": true, //true时为智能模式
            "remark":"空闲",
            "attribute":"其他",
            "address": "https://myblogimgbed.oss-cn-shenzhen.aliyuncs.com/img/empty.png",
            "create_time": "2017-11-09T20:36:26.000Z",
            "state": 0
           
          },

        ]
      },
    
  //初始化刷新，此处刷新第二个，写后端应该根据pageSize，pageNum请求到教室id封装List然后通过request来请求State进行封装classroomData
  
  components: {
    //面包屑组件
    Breadcrumb
  },
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
</style>