<template>
  <div>
    <!-- 面包屑导航区域 -->
    <Breadcrumb name1="按时间预约" name2="查询空闲教室结果"/>

    <!-- extend -->
    
    <!-- <DatePicker
      v-model="date"
      :local="local"
      placeholder="请选择注册时间"
      format="YYYY-MM-DD"
      :disabled-date="disabledDate"
      clearable /> -->

    <!-- 卡片视图区域 -->
    <el-card class="box-card">
      <el-table :data="classroomData.classroomList" stripe style="width: 100%" border>
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column prop="buildingName" label="楼宇名字"></el-table-column>
        <el-table-column prop="classroomName" label="教室" ></el-table-column>

        <el-table-column prop="week" label="周次"></el-table-column>

        <el-table-column prop="day" label="星期"  ></el-table-column>
        <!-- <el-table-column prop="equipment" label="设备"  ></el-table-column> -->
        <!-- <el-table-column prop="id" label="id"  ></el-table-column> -->
        <el-table-column prop="order" label="预约节次"  ></el-table-column>
        <el-table-column prop="capacity" label="教室容量" ></el-table-column>

        <el-table-column prop="user_name" label="使用者">
          <template slot-scope="scope">
            <el-input type="text" v-model="scope.row.user_name"/>
          </template>
        </el-table-column>

        <el-table-column prop="identity" label="身份">
          <template>
            <!-- <input type="text" v-model="scope.row.identity"/> -->
          教师
          </template>
        </el-table-column>

        <el-table-column prop="remark" label="备注">
          <template slot-scope="scope">
            <el-input type="text" v-model="scope.row.remark"/>
          </template>
        </el-table-column>

        <el-table-column prop="tel" label="电话">
          <template slot-scope="scope">
            <el-input type="text" v-model="scope.row.tel"/>
          </template>
        </el-table-column>

        <!-- <el-table-column prop="useinfo" label="使用信息"  ></el-table-column> -->

         
        <el-table-column label="预约" width="70px">
        <template v-slot="scope">
            <!-- 修改按钮 -->
            <el-tooltip effect="dark" content="申请" placement="top" :enterable="false">
              <el-button type="primary" icon="el-icon-finished" size="mini" @click="apply(scope.row)"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>

      </el-table>

    </el-card>

  </div>
</template>

<script>
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";


export default {
  name: "StudentClassroom_Order",
  created() {
    this.getClassroomList()
  },
  methods: {

    getClassroomList(){
        var search_res = this.$route.params["search_res"]
        // console.log("classroomList")
        // console.log(typeof(classroomList))

        var classroomList = new Array();
          for (let i = 0; i < Object.keys(search_res).length; i++) {
              classroomList.push(search_res[i])

          }
          this.classroomData.classroomList = classroomList
        //   console.log(this.classroomData.classroomList)


    },

    apply(row){
      
      var url = '/write/save/'

      var identity = "教师"

      this.axios.post(url, "reason="+row.remark+"&order="+row.order+
        "&classroomName="+row.classroomName+"&buildingName="+row.buildingName+"&name="+row.user_name+
        "&tel="+row.tel+"&week="+row.week+"&day="+row.day+"&identity="+identity

      ).then(res => {
          console.log("看这里！")
          console.log(res.data)
          this.$message.success(res.data)
          
          // this.$router.go(0) 
        
      })
    },
  },
  data(){
    return{
        classroomData: {
        classroomList: [
        ],

      },
      week_options:[
        {
          value: 1,
          label: '第1周'
        },{
          value: 2,
          label: '第2周'
        },{
          value: 3,
          label: '第3周'
        },{
          value: 4,
          label: '第4周'
        },{
          value: 5,
          label: '第5周'
        },{
          value: 6,
          label: '第6周'
        },{
          value: 7,
          label: '第7周'
        },{
          value: 8,
          label: '第8周'
        },{
          value: 9,
          label: '第9周'
        },{
          value: 10,
          label: '第10周'
        },{
          value: 11,
          label:  '第11周'
        },{
          value: 12,
          label: '第12周'
        },{
          value: 13,
          label: '第13周'
        },{
          value: 14,
          label: '第14周'
        },{
          value: 15,
          label:  '第15周'
        },{
          value: 16,
          label: '第16周'
        }
      ],

        
        
     
    }},
//   watch(){

// 	},

  
  components: {
    //面包屑组件
    Breadcrumb

    //extend
    // DatePicker
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

// extend

// 重写组件相关样式
// .datepicker {
// 	width: 290px;
// 	height: 40px;
// 	line-height: 40px;
// 	/deep/ input {
// 		color: #444;
// 		height: 40px;
// 		line-height: 40px;
// 	}
// 	/deep/ .focus {
// 		border: 1px solid blue;
// 	}
// 	/deep/ .datepicker-popup {
// 		width: 278px;
// 		.calendar-head {
// 			width: 278px;
// 			.calendar-year-select, .calendar-month-select  {
// 				font-size: 14px;
// 				&:hover {
// 					color: blue;
// 				}
// 			}
// 			.calendar-prev-year-btn, .calendar-prev-month-btn, .calendar-next-year-btn, .calendar-next-month-btn {
// 				&:hover {
// 					color: blue;
// 				}
// 			}
// 		}
// 		.calendar-body {
// 			width: 278px;
// 			height: 200px;
// 			.calendar-date {
// 				line-height: 100%;
// 			}
// 			.calendar-date-selected {
// 				background: blue;
// 			}
// 		}
// 		.datepicker__buttons {
// 			.datepicker__button-cancel {
// 				background: E3E3E3;
// 			}
// 			.datepicker__button-select {
// 				background: green;
// 			}
// 		}
// 	}
// 	.calendar-date-selected {
// 		background: yellow;
// 	}

</style>

