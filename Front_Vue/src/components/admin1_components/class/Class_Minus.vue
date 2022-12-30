<template>
  <div>
    <!-- 面包屑导航区域 -->
    <Breadcrumb name1="课程管理" name2="删除课程" />

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
      <el-table :data="data_test" stripe style="width: 100%" border>
        <el-table-column type="index" label="#"></el-table-column>

        <el-table-column prop="number" label="课程编号">
          <template slot-scope="scope">
            <input type="text" v-model="scope.row.number"/>
          </template>
        </el-table-column>

        <el-table-column prop="name" label="课程名称">
          <template slot-scope="scope">
            <input type="text" v-model="scope.row.name"/>
          </template>
        </el-table-column>

        
        <el-table-column label="删除" width="70px">
        <template v-slot="scope">
            <!-- 修改按钮 -->
            <el-tooltip effect="dark" content="删除" placement="top" :enterable="false">
              <el-button type="primary" icon="el-icon-error" size="mini" @click="minus(scope.row)"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>

      </el-table>

    </el-card>

  </div>
</template>

<script>
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";

// extend
// import DatePicker from 'vue-datepicker-local'

export default {
  name: "TeacherClass_Minus",
  methods: {

    //extend
  //   disabledDate (date) {
	// 	if (date.getTime() > new Date().getTime()) { // 当前日期以后的时间禁用
	// 		return true
	// 	}
	// 	// 当前时间50年前的日期禁用
	// 	if (date.getFullYear() < new Date().getFullYear() - 50) {
	// 		return true
	// 	}
	// 	if (date.getFullYear() === new Date().getFullYear() - 50 && date.getMonth() < new Date().getMonth()) {
	// 		return true
	// 	}
	// 	if (date.getFullYear() === new Date().getFullYear() - 50 && date.getMonth() === new Date().getMonth() && date.getDate() < new Date().getDate()) {
	// 		return true
	// 	}
	// },
    minus(row){
      // var reason = document.getElementById("reason")
      // console.log("!!!" + row.input_remark)
      // var remark = "asd";
      // var st_time = "time";
      // var ed_time = "time1";
      // var room_number = "5";
      // var buildingName = "jiaoXue";
      // var user_name = "wt";
      // var tel = "123456";
      var url = '/CourseEdit/'
      console.log(typeof Number(row.number))
      console.log(Number(row.number))
    //   console.log("星期")
      console.log(row.name)
      var oprtype = "del"

      this.axios.post(url, "oprtype="+oprtype+"&number="+Number(row.number)+"&name="+row.name
        // method: "post",
        // url:url,
        // "reason="+row.remark+"&startTime="+st_time_d+"&endTime="+ed_time_d+"&roomID="+row.room_number
        // data: {
        //   "reason": row.remark,
        //   "startTime": row.st_time,
        //   "endTime": row.ed_time,
        //   "roomID":row.room_number,
        //   "building_name":row.buildingName,
        //   "user_name": row.user_name,
        //   "tel":row.tel
        // }
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
        //extend
        // date: new Date(),
        // local:{
        //   dow: 1, // Monday is the first day of the week
			  //   yearSuffix: '年', // format of head
			  //   monthsHead: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'), // months of head
			  //   months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'), // months of panel
			  //   weeks: '一_二_三_四_五_六_日'.split('_') // weeks

        // },

        // data_test: this.$route.params["json_test"],
        data_test : 
            [
                {
                    "number": "",
                    "name": "",
                    "instructors":"",
                    "maxNumberOfStudents":"",
                    "classId":"",
                    "courseWeek":""
                }
            ],
        
       
        // remark:''
     
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

