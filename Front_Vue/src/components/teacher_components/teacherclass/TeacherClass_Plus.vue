<template>
  <div>
    <!-- 面包屑导航区域 -->
    <Breadcrumb name1="课程管理" name2="添加课程" />

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
            <el-input type="text" v-model="scope.row.number"/>
          </template>
        </el-table-column>

        <el-table-column prop="name" label="课程名称">
          <template slot-scope="scope">
            <el-input type="text" v-model="scope.row.name"/>
          </template>
        </el-table-column>

        <el-table-column prop="instructors" label="授课老师">
          <template slot-scope="scope">
            <el-input type="text" v-model="scope.row.instructors"/>
          </template>
        </el-table-column>

        <el-table-column prop="maxNumberOfStudetns" label="上课人数">
          <template slot-scope="scope">
            <el-input type="text" v-model="scope.row.maxNumberOfStudents"/>
          </template>
        </el-table-column>

        <el-table-column prop="classId" label="上课班级编号">
          <template slot-scope="scope">
            <el-input type="text" v-model="scope.row.classId"/>
          </template>
        </el-table-column>

        <el-table-column prop="courseWeek" label="上课周数">
          <template slot-scope="scope">
            <el-input type="text" v-model="scope.row.courseWeek"/>
          </template>
        </el-table-column>

        <el-table-column label="添加" width="70px">
        <template v-slot="scope">
            <!-- 修改按钮 -->
            <el-tooltip effect="dark" content="添加" placement="top" :enterable="false">
              <el-button type="primary" icon="el-icon-finished" size="mini" @click="plus(scope.row)"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>

        <!-- <el-table-column prop="number" label="楼宇名字" width="90px"></el-table-column>
        <el-table-column prop="room_number" label="教室"  width="70px"></el-table-column> -->

         <!-- <el-table-column prop="week" label="周次" width="120px">
          <template slot-scope="scope">
            <el-select v-model="scope.row.week" clearable placeholder="选择周次" size="">
                <el-option
                    v-for="item in week_options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
          </template>
        </el-table-column>

        <el-table-column prop="date" label="星期" width="120px">
          <template slot-scope="scope">
            <el-select v-model="scope.row.date" clearable placeholder="选择星期" size="">
                <el-option
                    v-for="item in date_options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
          </template>
        </el-table-column> -->

        <!-- <el-table-column prop="st_time" label="开始时间" width="150px">
          <template slot-scope="scope">
            <el-input type="text" v-model="scope.row.identity" />
            <el-select v-model="scope.row.st_time" clearable placeholder="选择时间" size="">
                <el-option
                    v-for="item in time_options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
          </template>
        </el-table-column> -->

        <!-- <el-table-column prop="st_time" label="开始时间">
          <template slot-scope="scope">
            <el-input type="text" v-model="scope.row.st_time" />
          </template>
        </el-table-column> -->

        <!-- <el-table-column prop="pre_time" label="预约节次" width="150px">
          <template slot-scope="scope">
            <el-select v-model="scope.row.pre_time" clearable placeholder="选择时间" size="">
                <el-option
                    v-for="item in time_options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
          </template>
        </el-table-column> -->

        <!-- <el-table-column prop="ed_time" label="结束时间">
          <template slot-scope="scope">
            <el-input type="text" v-model="scope.row.ed_time" />
          </template>
        </el-table-column> -->

        <!-- <el-table-column prop="user_name" label="使用者">
          <template slot-scope="scope">
            <el-input type="text" v-model="scope.row.user_name"/>
          </template>
        </el-table-column> -->


        <!-- <el-table-column prop="identity" label="身份">
          <template slot-scope="scope"> -->
            <!-- <input type="text" v-model="scope.row.identity" /> -->
            <!-- <el-select v-model="scope.row.identity" clearable placeholder="选择身份" size="">
                <el-option
                    v-for="item in identity_options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
          </template>
        </el-table-column> -->

        <!-- <el-table-column prop="remark" label="备注">
          <template slot-scope="scope"> -->
            <!-- <input class="remark" type="text"  v-model="remark" placeholder="请输入备注"> -->
            <!-- <input type="text" v-model="scope.row.remark" />
          </template>
        </el-table-column>
        <el-table-column prop="tel" label="电话">
          <template slot-scope="scope"> -->
            <!-- <input type="text" v-model="scope.row.tel" />
          </template>
        </el-table-column>
        <el-table-column label="预约" width="70px">
        <template v-slot="scope">
            修改按钮
            <el-tooltip effect="dark" content="申请" placement="top" :enterable="false">
              <el-button type="primary" icon="el-icon-finished" size="mini" @click="apply(scope.row)"></el-button>
            </el-tooltip>
          </template>
        </el-table-column> -->

      </el-table>

    </el-card>

  </div>
</template>

<script>
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";

// extend
// import DatePicker from 'vue-datepicker-local'

export default {
  name: "TeacherClass_Plus",
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
    plus(row){
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
      var oprtype = "add"

      this.axios.post(url, "oprtype="+oprtype+"&number="+Number(row.number)+"&name="+row.name+
        "&instructors="+row.instructors+"&maxNumberOfStudents="+Number(row.maxNumberOfStudents)+
        "&classId="+row.classId+"&courseWeek="+Number(row.courseWeek)
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
        
        identity_options: [
          {
        value: 'student',
        label: '学生'
      }, {
        value: 'teacher',
        label: '教师'
      }],
      time_options:[
        {
          value: '1',
          label: '8:00-9:35'
        },{
          value: '2',
          label: '9:55-11:30'
        },{
          value: '3',
          label: '13:30-15:05'
        },{
          value: '4',
          label: '15:20-16:55'
        },{
          value: '5',
          label: '17:10-18:45'
        },{
          value: '6',
          label: '19:30-21:05'
        }
      ],
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
      date_options:[
        {
          value: 1,
          label: '周一'
        },{
          value: 2,
          label: '周二'
        },{
          value: 3,
          label: '周三'
        },{
          value: 4,
          label: '周四'
        },{
          value: 5,
          label:  '周五'
        },{
          value: 6,
          label: '周六'
        },{
          value: 7,
          label: '周日'
        }
      ]
        // remark:''
     
    }},
  watch(){
      // remark(){
      //   console.log("changed");
      // }
      //extend
    //   date (to, from) ;{
	  //   	console.log('to:', to)
		//     if (to === '') {
		// 	    this.checkFields('date')
		//     } else {
		// 	    this.checkFocus('date')
		// }
	},

  
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

