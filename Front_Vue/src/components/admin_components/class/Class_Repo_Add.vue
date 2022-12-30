<template>
  <div>
    <!-- 面包屑导航区域 -->
    <Breadcrumb name1="课程管理" name2="添加课程库" />

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

        <!-- <el-table-column prop="place" label="上课地点">
          <template slot-scope="scope">
            <input type="text" v-model="scope.row.number"/>
          </template>
        </el-table-column> -->

        <el-table-column prop="name" label="课程名称">
          <template slot-scope="scope">
            <input type="text" v-model="scope.row.name"/>
          </template>
        </el-table-column>

        <el-table-column prop="instructors" label="授课老师">
          <template slot-scope="scope">
            <input type="text" v-model="scope.row.instructors"/>
          </template>
        </el-table-column>

        <el-table-column prop="maxNumberOfStudetns" label="上课人数">
          <template slot-scope="scope">
            <input type="text" v-model="scope.row.maxNumberOfStudents"/>
          </template>
        </el-table-column>

        <el-table-column prop="classId" label="上课班级编号">
          <template slot-scope="scope">
            <input type="text" v-model="scope.row.classId"/>
          </template>
        </el-table-column>

        <el-table-column prop="courseWeek" label="上课周数" width="150px">
          <template slot-scope="scope">
            <el-select v-model="scope.row.courseWeek" clearable placeholder="选择周数" size="">
                <el-option
                    v-for="item in week_options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
          </template>
        </el-table-column>

        <!-- <el-table-column prop="courseWeek" label="上课周数">
          <template slot-scope="scope">
            <input type="text" v-model="scope.row.courseWeek"/>
          </template>
        </el-table-column> -->

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
            <input type="text" v-model="scope.row.identity" />
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
            <input type="text" v-model="scope.row.st_time" />
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
            <input type="text" v-model="scope.row.ed_time" />
          </template>
        </el-table-column> -->

        <!-- <el-table-column prop="user_name" label="使用者">
          <template slot-scope="scope">
            <input type="text" v-model="scope.row.user_name"/>
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
    plus(row){

      var url = '/CourseEdit'
      // console.log(typeof Number(row.number))
      // console.log(Number(row.number))
    //   console.log("星期")
      // console.log(row.name)
      var oprtype = "add"

      this.axios.post(url, "oprtype="+oprtype+"&number="+Number(row.number)+"&name="+row.name+
        "&instructors="+row.instructors+"&maxNumberOfStudents="+Number(row.maxNumberOfStudents)+
        "&classId="+row.classId+"&courseWeek="+Number(row.courseWeek)

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
          value: 4,
          label: '4周'
        },{
          value: 8,
          label: '8周'
        },{
          value: 12,
          label: '12周'
        },{
          value: 14,
          label: '14周'
        },{
          value: 16,
          label: '16周'
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
  // watch(){

	// },

  
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

</style>

