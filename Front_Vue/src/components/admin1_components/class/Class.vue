<template>
  <div>
    <!-- 面包屑导航区域 -->
    <Breadcrumb name1="课程管理" name2="课程列表" />
    <!-- 卡片视图区域 -->
    <el-card class="box-card">
      <!-- 搜索栏 -->
      <el-row :gutter="20">
        <el-col :span="8">
          <!-- 搜索与添加区域 -->
          <el-input placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <!-- <el-col :span="4"> -->
          <!-- 添加用户区域 -->
          <!-- <el-button type="primary">添加用户</el-button>
        </el-col> -->
      </el-row>
      <!-- 用户数据表格区域 -->
      <!-- 用户列表 -->
      <el-table :data="userData.userList" stripe style="width: 100%" border>
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column prop="buildingName" label="楼宇名称"></el-table-column>
        <el-table-column prop="classroomName" label="教室名称"></el-table-column>
        <el-table-column prop="week" label="周次"></el-table-column>
        <el-table-column prop="day" label="星期"></el-table-column>
        <el-table-column prop="order" label="课程节次"></el-table-column>
        <el-table-column prop="name" label="姓名" width="100"></el-table-column>
        <el-table-column prop="identity" label="身份"></el-table-column>
        <el-table-column prop="tel" label="电话"></el-table-column>
        <!-- <el-table-column prop="room_number" label="预约教室" width="250"></el-table-column> -->
        <!-- <el-table-column prop="tel" label="电话"></el-table-column> -->
        <el-table-column prop="reason" label="备注"></el-table-column>
        <el-table-column prop="status" label="预约状态"></el-table-column>
        <!-- <el-table-column label="状态">
          <template v-slot="scope">
            <el-switch v-model="scope.row.mg_state" active-color="#13ce66" inactive-color="#ff4949" @change="userStatuChanged(scope.row)"> </el-switch>
          </template>
        </el-table-column> -->
        <el-table-column label="审批" width="180px">
          <template v-slot="scope">
            <el-tooltip effect="dark" content="审批同意" placement="top" :enterable="false">
              <el-button type="success" icon="el-icon-check" size="mini" @click="approve(scope.row.id)"></el-button>
            </el-tooltip>
            <el-tooltip effect="dark" content="审批拒绝" placement="top" :enterable="false">
              <el-button type="danger" icon="el-icon-close" size="mini" @click="refuse(scope.row.id)"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <!-- <el-pagination
          @current-change="handleCurrentChange"
          :current-page="queryInfo.pagenum"
          @size-change="handleSizeChange"
          :page-size="queryInfo.pagesize"
          :page-sizes="[2, 5, 15]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="userData.total"
      >
      </el-pagination> -->
    </el-card>
  </div>
</template>

<script>
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
export default {
  name: "User",
  data() {
    return {

      // 获取用户列表的参数对象
      // queryInfo: {
      //   // 搜索值
      //   query: '',
      //   // 当前的页数
      //   pagenum: 1,
      //   // 当前每次显示多少条数据
      //   pagesize: 5
      // },
      // 存放用户的数据和数量
      courseData: {
        courseList: [
        ],
      }
    }
  },
  components: {
    //面包屑组件
    Breadcrumb
  },
  created() {
    this.getCourseList()
    // this.getUserList()
    // this.approve(),
    // this.refuse()
  },
  methods: {

    getCourseList(){
      var url = '/check/search';
      this.axios.get(url).then(res => {
          console.log("看这里！")
          console.log(res.data)
          var appoinmentList = new Array();
          for (let i = 0; i < Object.keys(res.data).length; i++) {
            if(res.data[i]["status"] == 0){
              appoinmentList.push(res.data[i])
            }
            
          }

          for(let i = 0;i<Object.keys(appoinmentList).length;i++){
            appoinmentList[i]["week"] = "第" + appoinmentList[i]["week"] + "周"
            appoinmentList[i]["day"] = "星期" + appoinmentList[i]["day"]
            if(appoinmentList[i]["order"] == 1){
              appoinmentList[i]["order"] = "8:00-9:35"
            }else if(appoinmentList[i]["order"] == 2){
              appoinmentList[i]["order"] = "9:55-11:30"
            }else if(appoinmentList[i]["order"] == 3){
              appoinmentList[i]["order"] = "13:30-15:05"
            }else if(appoinmentList[i]["order"] == 4){
              appoinmentList[i]["order"] = "15:20-16:55"
            }else if(appoinmentList[i]["order"] == 5){
              appoinmentList[i]["order"] = "17:10-18:45"
            }else if(appoinmentList[i]["order"] == 6){
              appoinmentList[i]["order"] = "19:30-21:05"
            }
            
            if(appoinmentList[i]["status"] == 0){
              appoinmentList[i]["status"] = "待审批"
            }else if(appoinmentList[i]["status"] == 1){
              appoinmentList[i]["status"] = "通过"
            }else if(appoinmentList[i]["status"] == 2){
              appoinmentList[i]["status"] = "拒绝"
            }

          }

          console.log("看这里！！！！")
          // console.log(appoinmentList[0]["week"])


          this.userData.userList = appoinmentList
          // this.$message.success(res.data)
      })
    },

    approve(id){
      var url = '/check/' + id + '/agree';
      this.axios.get(url).then(res => {
          console.log("看这里！")
          console.log(res.data)
          this.$message.success(res.data)
        
      })
      this.$router.go(0) 

    },
      // if (res.meta.status !== 200) {
      //   this.$message.error('获取用户列表失败!')
      // }
      // this.$message.success('获取用户列表成功!')
      

      // let _this = this;
      // // response.setHeader('Access-Control-Allow-Origin','*')
      // this.axios({
      //     method: 'get',
      //     url: 'http://127.0.0.1:8000/back/check/1/disagree/',
      //     data: '1'
      //   }).then(res => {
      //     console.log(res.data);
      //     alert(res.data)
      //     // _this.userToken = 'Bearer ' + res.data.data.body.token;
      //     // 将用户token保存到vuex中
      //     // _this.changeLogin({ Authorization: _this.userToken });
      //     // _this.$router.push('/home');
      //     alert('登陆成功');
      //   }).catch(error => {
      //     alert('账号或密码错误');
      //     console.log(error);
      //   });
    refuse(id){
      var url = '/check/' + id + '/disagree';
      this.axios.get(url).then(res => {
          console.log(res.data)
          this.$message.success(res.data)
          
          this.$router.go(0) 
        
      })
    },
  }
    //获取用户数据
    // getUserList(){
    //   let list = this.userData.userList;
    //   let total = this.userData.total;
    //   this.userData.userList = list;
    //   this.userData.total = total;
    //   this.$message.success('获取预约信息成功!')
      // const { data: res } = await this.$http.get('users', {
      //   params: this.queryInfo
      // })
      // if (res.meta.status !== 200) {
      //   this.$message.error('获取用户列表失败!')
      // }
      // this.$message.success('获取用户列表成功!')
      // this.userData.userList = res.data.users
      // this.userData.total = res.data.total
      // console.log(res)
    // },
    // 监听 pagesize 改变事件 每页显示的个数
    // handleSizeChange(newSize) {
    //   console.log(newSize)
    //   this.queryInfo.pagesize = newSize
    //   this.getUserList()
    // },
    // 监听 页码值 改变的事件 当前页面值
    // handleCurrentChange(newPage) {
    //   console.log(newPage)
    //   this.queryInfo.pagenum = newPage
    //   this.getUserList()
    // },

}
</script>

<style lang="less" scoped>
.el-table {
  margin-top: 15px;
}
</style>