<template>
  <div>
    <!-- 面包屑导航区域 -->
    <Breadcrumb name1="教室管理" name2="教室基本信息管理" />
    <!-- 卡片视图区域 -->
    <el-card class="box-card">
      <!-- 搜索区域 -->
      <el-row :gutter="10">
        <!-- 楼宇选择区域 -->
        <el-col :span="6">
          <div class="block">
            <el-cascader
                :options="options1"
                :props="{ checkStrictly: false }"
                clearable filterable></el-cascader>
          </div>
        </el-col>
        <!-- 查询区域 -->
        <el-col :span="4">
          <el-button type="primary">查询</el-button>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="flush()">刷新</el-button>
        </el-col>
      </el-row>
      <!-- 教室数据区域 -->
      <el-table :data="classroomData.classroomList" stripe style="width: 100%" border>
        <el-table-column type="index" label="#"></el-table-column>
        
        <!-- <el-table-column prop="campusName" label="校区"></el-table-column> -->
        
        <el-table-column prop="buildingName" label="楼宇名字"></el-table-column>
        <el-table-column prop="classroomName" label="教室编号(点击获取课程信息)" >
          <template slot-scope="scope">
            <div class="point" @click="show_course(scope.row)" :class="box"><a>{{ scope.row.classroomName }}</a></div>
          </template>
        </el-table-column>
        
        <el-table-column label="设备" width="180px">
          <template v-slot="scope">
            <!-- 修改按钮 -->
            <el-tooltip effect="dark" content="修改" placement="top" :enterable="false">
              <el-button type="primary" icon="el-icon-edit" size="mini" @click="set_device(scope.row)"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column label="容量" width="180px">
          <template v-slot="scope">
            <!-- 修改按钮 -->
            <el-tooltip effect="dark" content="修改" placement="top" :enterable="false">
              <el-button type="primary" icon="el-icon-edit" size="mini" @click="set_capacity(scope.row)"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
        <!-- <el-table-column label="空闲状态" >
          <template slot-scope="scope">
              <img slot="reference" :src="scope.row.state.deep_state.have_person.person_nums === 0 ? require('../../../assets/empty.png') : require('../../../assets/not_empty.png')" style="width: 30px;height: 30px">
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

        <el-table-column prop="useinfro" label="使用须知"></el-table-column>
      </el-table>
<!--      已废弃-->
      <el-dialog
          :visible.sync="showClassroomSate"
          width="15%"
      >
        <span slot="footer" class="dialog-footer">
  </span>
      </el-dialog>
      <!-- 分页 -->
      <el-pagination
          @current-change="handleCurrentChange"
          :current-page="queryInfo.pagenum"
          @size-change="handleSizeChange"
          :page-size="queryInfo.pagesize"
          :page-sizes="[2, 5, 15]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="classroomData.total"
      >
      </el-pagination>
    </el-card>
<div style="solid green;text-align:center;">Copyright  2022 智能课程预约管理 | Powered by Play-The-Drum</div>
  </div>
  
</template>


<script>
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
export default {
  name: "Classroom_Basic",
  created() {
    this.flush()
    // this.getUserList()
    // this.approve(),
    // this.refuse()
  },
  methods: {
    //智能模式切换调用send方法
    async switchChange(val) {
      console.log(val)
      console.log(this.$data.state)
      this.state.web_state.web_ctrl = !val;
      console.log("web的状态");
      console.log(this.state.web_state);
      await this.send()
    },
    //初始化获得classroom数据
    getClassroomList(){
      console.log(this)
      console.log("获取")
      this.$message.success('获取楼宇列表成功!')
    },
    //测试方法
    test(){
      console.log(this.state)
    },
    //点击按钮查看教室信息
    showClassroomDetail(){
      //点击跳转到详情界面
      //编程式导航实现页面跳转
      this.$router.push('/detail')
      //把对话框弹出
      // this.showClassroomSate = true;
      // this.request();
    },
    
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
    flush(){
      console.log("flush")
      console.log("sbsbsb")
      var url = '/ClassroomEdit';
      this.axios.post(url,"oprtype=flush").then(res => {
          console.log("看这里！")
          console.log(res.data)
          this.res_result = res.data
          var json_test = new Array();
          for (let i = 0; i < Object.keys(res.data).length; i++) {
            json_test.push(res.data[i+1])
          }
          console.log("json_test")
          console.log(json_test)
          this.classroomData.classroomList = json_test
          // this.$message.error(res.msg)
      }).catch(error => {
        console.log(error)
      })
    },
    show_course(row){
      console.log(row.buildingName)
      console.log(row.classroomName)
      // console.log(this.$route.path)
      var url = '/ClassroomShowCourse';
      console.log("sbsbsb")
      console.log(typeof row.buildingName)
      this.axios.post(url,"buildingName="+row.buildingName+"&classroomName="+row.classroomName+"&oprtype=showcourse").then(res => {
          console.log("看这里！")
          console.log(res.data)
          this.res_result = res.data
          var courselist = new Array();
          for (let i = 0; i < Object.keys(res.data).length; i++) {
            courselist.push(res.data[i+1])
          }
          console.log("courselist")
          console.log(courselist)
          this.$router.push({ name: 'classrooms_showcourse', params: {courselist}})
          // this.$message.error(res.msg)
      }).catch(error => {
        console.log(error)
      })
      this.$router.push({ name: 'classrooms_showcourse', params: {courselist}})
    },
    set_device(row) {
      console.log(row.buildingName)
      console.log(row.classroomName)
      // console.log(this.$route.path)
      var url = '/ClassroomEdit';
      console.log("sbsbsb")
      console.log(typeof row.buildingName)
      this.axios.post(url,"buildingName="+row.buildingName+"&classroomName="+row.classroomName+"&oprtype=ques").then(res => {
          console.log("看这里！")
          console.log(res.data)
          this.res_result = res.data
          console.log(res.data["buildingName"])
          var json_test= [
            {
              'buildingName':res.data["buildingName"],
              'className':res.data["className"],
              'name':"电脑",
              'amount':res.data["computer"],
              'capacity':res.data["capacity"],
              'useinfro':res.data["useinfro"]
            },
            {
              'buildingName':res.data["buildingName"],
              'className':res.data["className"],
              'name':"空调",
              'amount':res.data["kongtiao"],
              'capacity':res.data["capacity"],
              'useinfro':res.data["useinfro"]
            },
          ]
          console.log("json_test666")
          console.log(json_test)
          this.$router.push({ name: 'classrooms_device', params: {json_test}})
          // this.$message.error(res.msg)
      }).catch(error => {
        console.log(error)
      })

      // console.log(this.$route.path)
    },
    set_capacity(row) {
      console.log(row.buildingName)
      console.log(row.classroomName)
      // console.log(this.$route.path)
      var url = '/ClassroomEdit';
      console.log("sbsbsb")
      console.log(typeof row.buildingName)
      this.axios.post(url,"buildingName="+row.buildingName+"&classroomName="+row.classroomName+"&oprtype=ques").then(res => {
          console.log("看这里！")
          console.log(res.data)
          this.res_result = res.data
          var json_test= new Array();
          json_test.push(this.res_result)
          console.log(json_test)
          console.log("json_test")
          this.$router.push({ name: 'classrooms_capacity', params: {json_test}})
          // this.$message.error(res.msg)
      }).catch(error => {
        console.log(error)
      })
    },
    approve(){
      var url = '/check/1/';
      this.axios.get(url).then(res => {
          console.log("看这里！")
          console.log(res)
          // this.$message.error(res.msg)
        
      })

      // const { data: res } = this.$http.get(
      //   'http://127.0.0.1:8000/back/check/1/disagree/'
      // ).then(res => {
      //   console.log("看这里！")
      //   console.log(res)
      //   // this.$message.success(res.data)
      // }).catch(error => {
      //   console.log(error)
      // })


    },
    //接受后端数据
    // async request(){
    //   console.log("测试")
    //   console.log(this.state)
    //   const url = this.HOME + '/web_get_state';
    //   await this.$axios({  //this代表vue对象，之前在入口文件中把axios挂载到了vue中，所以这里直接用this.$axios调用axios对象
    //     method: 'post',
    //     url: url,
    //   }).then(response => (
    //       // console.log(response.data)
    //       //修改对应教室的状态
    //       this.state = response.data
    //   )).catch(function (err) {
    //     console.log(err);
    //   })
    //   console.log("打印状态")
    //   console.log(this.state.web_state.web_ctrl)
    //   console.log("打印人数")
    //   console.log(this.state.deep_state.have_person.person_nums)
    // },
    //发送后端数据
    async send(){
      this.$data.state_s.web_state = this.$data.state.web_state;
      console.log(this.state)
      const url = this.HOME + '/web_state';
      await this.$axios({  //this代表vue对象，之前在入口文件中把axios挂载到了vue中，所以这里直接用this.$axios调用axios对象
        method: 'post',
        url: url,
        data:this.$data.state_s
      }).then(function (res) {
        console.log(res);
      }).catch(function (err) {
        console.log(err);
      })
    },

  },
  //定时器更新state
  async mounted() {
    // setInterval(()=>this.request(), 1000);
  },
  data(){
    return{
      res_result:"",
      //封装返回给后台的state
      state_s: {
        web_state:{}
      },
      //查看教室基本信息对话框
      showClassroomSate: false,
      // 获取用户列表的参数对象
      queryInfo: {
        // 搜索值
        query: '',
        // 当前的页数
        pagenum: 1,
        // 当前每次显示多少条数据
        pagesize: 5
      },
      //校区选项
      campusValue: '',
      //教室的所有状态
      state: {
        //湿度
        Humidity: 11,
        //温度
        Temperature: 11,
        //火灾
        fire_state: "safe",
        //火灾
        smoke_state: "safe",
        //深度学习状态
        deep_state: {
          have_person: {
            //教室人数
            person_nums: 3,
            //1区域有没有人
            area_1: 3,
            area_2: -1,
            area_3: -1,
            area_4: -1
          },
          person_state: {
            //人物状态
            person_1: 0,
            person_2: 0,
            person_3: 0,
            person_4: 0
          }
        },
        web_state: {
          //为0表示智能模式，为1表示网页控制
          web_ctrl: true,
          ctrl_state: {
            light_state: {
              //灯的状态
              light_1: 1,
              light_2: 1,
              light_3: 1,
              light_4: 1
            },
            //风扇状态
            fan_state: 1
          }
        }
      },
      //校区楼宇的级联选择器,
      options: [
          {
        value: 'campus1',
        label: '大学城校区',
        children: [
            {
          value: 'campus1_build1',
          label: '教学一号楼',
        }, {
          value: 'campus1_build2',
          label: '教学二号楼',
        }, {
          value: 'campus1_build3',
          label: '教学三号楼',
        },{
          value: 'campus1_build4',
          label: '教学四号楼',
        },{
          value: 'campus1_build5',
          label: '教学五号楼',
        },
        ]
      }, {
        value: 'campus2',
        label: '龙洞校区',
        children: [
          {
            value: 'campus1_build1',
            label: '教学一号楼',
          }, {
            value: 'campus1_build2',
            label: '教学二号楼',
          }, {
            value: 'campus1_build3',
            label: '教学三号楼',
          },{
            value: 'campus1_build4',
            label: '教学四号楼',
          },{
            value: 'campus1_build5',
            label: '教学五号楼',
          },
        ]

      }, {
        value: 'campus3',
        label: '番禺校区',
        children: [
          {
            value: 'campus1_build1',
            label: '教学一号楼',
          }, {
            value: 'campus1_build2',
            label: '教学二号楼',
          }, {
            value: 'campus1_build3',
            label: '教学三号楼',
          },{
            value: 'campus1_build4',
            label: '教学四号楼',
          },{
            value: 'campus1_build5',
            label: '教学五号楼',
          },
        ]

      }, {
        value: 'campus4',
        label: '东风路校区',
        children: [
          {
            value: 'campus1_build1',
            label: '教学一号楼',
          }, {
            value: 'campus1_build2',
            label: '教学二号楼',
          }, {
            value: 'campus1_build3',
            label: '教学三号楼',
          },{
            value: 'campus1_build4',
            label: '教学四号楼',
          },{
            value: 'campus1_build5',
            label: '教学五号楼',
          },
        ]

      }, {
        value: 'campus5',
        label: '揭阳校区',
      }, ],
      //教室数据
      classroomData:{
        classroomList: [
          {
            "id": 1,
            "campusName": "大学城校区",
            "buildingName": "教学楼",
            "classroomName":"教101",
            "empty_state": 1,
            "auto_state": true, //true时为智能模式
            "remark":"空闲",
            "address": "https://myblogimgbed.oss-cn-shenzhen.aliyuncs.com/img/empty.png",
            "create_time": "2017-11-09T20:36:26.000Z",
            state: {
              //湿度
              Humidity: 11,
              //温度
              Temperature: 11,
              //火灾
              fire_state: "safe",
              //火灾
              smoke_state: "safe",
              //深度学习状态
              deep_state: {
                have_person: {
                  //教室人数
                  person_nums: 0,
                  //1区域有没有人
                  area_1: -1,
                  area_2: -1,
                  area_3: -1,
                  area_4: -1
                },
                person_state: {
                  //人物状态
                  person_1: 0,
                  person_2: 0,
                  person_3: 0,
                  person_4: 0
                }
              },
              web_state: {
                //为0表示智能模式，为1表示网页控制
                web_ctrl: false,
                ctrl_state: {
                  light_state: {
                    //灯的状态
                    light_1: 0,
                    light_2: 0,
                    light_3: 0,
                    light_4: 0
                  },
                  //风扇状态
                  fan_state: 0
                }
              }
            },
          },
            //第二个是测试的教室
          {
            "id": 2,
            "campusName": "大学城校区",
            "buildingName": "教学二号楼",
            "classroomName":"教2-202",
            "empty_state": "not_empty",
            "auto_state": true, //true时为智能模式
            "remark":"上课",
            "address": "https://myblogimgbed.oss-cn-shenzhen.aliyuncs.com/img/not_empty.png",
            "create_time": "2017-11-09T20:36:26.000Z",
            state: {
              //湿度
              Humidity: 11,
              //温度
              Temperature: 11,
              //火灾
              fire_state: "safe",
              //火灾
              smoke_state: "safe",
              //深度学习状态
              deep_state: {
                have_person: {
                  //教室人数
                  person_nums: 1,
                  //1区域有没有人
                  area_1: 1,
                  area_2: -1,
                  area_3: -1,
                  area_4: -1
                },
                person_state: {
                  //人物状态
                  person_1: 0,
                  person_2: 0,
                  person_3: 0,
                  person_4: 0
                }
              },
              web_state: {
                //为0表示智能模式，为1表示网页控制
                web_ctrl: true,
                ctrl_state: {
                  light_state: {
                    //灯的状态
                    light_1: 1,
                    light_2: 0,
                    light_3: 0,
                    light_4: 0
                  },
                  //风扇状态
                  fan_state: 1
                }
              }
            },
          },
          {
            "id": 3,
            "campusName": "大学城校区",
            "buildingName": "教学二号楼",
            "classroomName":"教2-203",
            "empty_state": "empty",
            "auto_state": true, //true时为智能模式
            "remark":"空闲",
            "address": "https://myblogimgbed.oss-cn-shenzhen.aliyuncs.com/img/empty.png",
            "create_time": "2017-11-09T20:36:26.000Z",
            state: {
              //湿度
              Humidity: 11,
              //温度
              Temperature: 11,
              //火灾
              fire_state: "safe",
              //火灾
              smoke_state: "safe",
              //深度学习状态
              deep_state: {
                have_person: {
                  //教室人数
                  person_nums: 0,
                  //1区域有没有人
                  area_1: -1,
                  area_2: -1,
                  area_3: -1,
                  area_4: -1
                },
                person_state: {
                  //人物状态
                  person_1: 0,
                  person_2: 0,
                  person_3: 0,
                  person_4: 0
                }
              },
              web_state: {
                //为0表示智能模式，为1表示网页控制
                web_ctrl: false,
                ctrl_state: {
                  light_state: {
                    //灯的状态
                    light_1: 0,
                    light_2: 0,
                    light_3: 0,
                    light_4: 0
                  },
                  //风扇状态
                  fan_state: 0
                }
              }
            },
          },
          {
            "id": 4,
            "campusName": "大学城校区",
            "buildingName": "教学二号楼",
            "classroomName":"教2-204",
            "empty_state": "empty",
            "auto_state": true, //true时为智能模式
            "remark":"空闲",
            "address": "https://myblogimgbed.oss-cn-shenzhen.aliyuncs.com/img/empty.png",
            "create_time": "2017-11-09T20:36:26.000Z",
            state: {
              //湿度
              Humidity: 11,
              //温度
              Temperature: 11,
              //火灾
              fire_state: "safe",
              //火灾
              smoke_state: "safe",
              //深度学习状态
              deep_state: {
                have_person: {
                  //教室人数
                  person_nums: 0,
                  //1区域有没有人
                  area_1: -1,
                  area_2: -1,
                  area_3: -1,
                  area_4: -1
                },
                person_state: {
                  //人物状态
                  person_1: 0,
                  person_2: 0,
                  person_3: 0,
                  person_4: 0
                }
              },
              web_state: {
                //为0表示智能模式，为1表示网页控制
                web_ctrl: false,
                ctrl_state: {
                  light_state: {
                    //灯的状态
                    light_1: 0,
                    light_2: 0,
                    light_3: 0,
                    light_4: 0
                  },
                  //风扇状态
                  fan_state: 0
                }
              }
            },
          },
          {
            "id": 5,
            "campusName": "大学城校区",
            "buildingName": "教学二号楼",
            "classroomName":"教2-205",
            "empty_state": "empty",
            "auto_state": true, //true时为智能模式
            "remark":"空闲",
            "address": "https://myblogimgbed.oss-cn-shenzhen.aliyuncs.com/img/empty.png",
            "create_time": "2017-11-09T20:36:26.000Z",
            state: {
              //湿度
              Humidity: 11,
              //温度
              Temperature: 11,
              //火灾
              fire_state: "safe",
              //火灾
              smoke_state: "safe",
              //深度学习状态
              deep_state: {
                have_person: {
                  //教室人数
                  person_nums: 0,
                  //1区域有没有人
                  area_1: -1,
                  area_2: -1,
                  area_3: -1,
                  area_4: -1
                },
                person_state: {
                  //人物状态
                  person_1: 0,
                  person_2: 0,
                  person_3: 0,
                  person_4: 0
                }
              },
              web_state: {
                //为0表示智能模式，为1表示网页控制
                web_ctrl: false,
                ctrl_state: {
                  light_state: {
                    //灯的状态
                    light_1: 0,
                    light_2: 0,
                    light_3: 0,
                    light_4: 0
                  },
                  //风扇状态
                  fan_state: 0
                }
              }
            },
          },

        ],
        total: 5
      }
      }
    },
  //初始化刷新，此处刷新第二个，写后端应该根据pageSize，pageNum请求到教室id封装List然后通过request来请求State进行封装classroomData
  // async created() {
  //     console.log(this.$data.state)
  //     this.getClassroomList();
  //     console.log("初始化")
  //     // await this.request()
  //    },
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
