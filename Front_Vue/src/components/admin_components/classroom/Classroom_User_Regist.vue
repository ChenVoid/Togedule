<template>
  <div>
         <el-dialog title="用户信息" :visible.sync="dialogTableVisible" width="800px">
        <el-table :data="account_edit">
          <el-table-column label="uid">
            <template slot-scope="scope">
              <input type="text" v-model="scope.row.uid" />
            </template>
          </el-table-column>
          <el-table-column label="用户名">
            <template slot-scope="scope">
              <input type="text" v-model="scope.row.input_name" />
            </template>
          </el-table-column>
                    <el-table-column label="邮箱">
            <template slot-scope="scope">
              <input type="text" v-model="scope.row.input_email" />
            </template>
          </el-table-column>
                    <el-table-column label="真名">
            <template slot-scope="scope">
              <input type="text" v-model="scope.row.input_name2" />
            </template>
          </el-table-column>
                    <el-table-column label="phone">
            <template slot-scope="scope">
              <input type="text" v-model="scope.row.input_phonenumber" />
            </template>
          </el-table-column>

          <el-table-column prop="attribute" label="用户组" width="120px">
            <template slot-scope="scope">
              <el-select v-model="scope.row.value" placeholder="请选择">
                <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            </template>
        </el-table-column>

        <el-table-column prop="college" label="学院" width="120px">
            <template slot-scope="scope">
              <el-select v-model="scope.row.college" placeholder="请选择">
                <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            </template>
        </el-table-column>

          <el-table-column label="提交" width="180px">
            <template v-slot="scope">
            <!-- 修改按钮 -->
              <el-tooltip effect="dark" content="修改" placement="top" :enterable="false">
                <el-button type="primary" icon="el-icon-edit" size="mini" @click="update_account(scope.row)"></el-button>
              </el-tooltip>
            </template>
          </el-table-column>
        </el-table>
      </el-dialog>
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
accept=".zip">
<el-button
size="small"
type="primary"
>批量注册
<i class="el-icon-upload"/>
</el-button>
</el-upload>
  <p>
  </p>
  <p>
  </p>
      <el-row :gutter="10">
        <!-- 楼宇选择区域 -->
        <!-- 查询区域 -->
        <el-col :span="4">
          <el-button type="primary" @click="flush()">用户信息注册</el-button>
        </el-col>
      </el-row>

  </div>
  
</template>


<script>
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import * as echarts from 'echarts'  
export default {

      data () {

        return {
            name: "Classroom_Basic",
        options1: [
        {
        value: 'SchoolManager',
        label: 'SchoolManager'
        }, 
        {
        value: 'Teacher',
        label: 'Teacher'
        }, 
        {
        value: 'Student',
        label: 'Student'
        }, 
      ],
      options2: [
        {
        value: '1',
        label: '计通学院'
        }, 
        {
        value: '2',
        label: '土资学院'
        }, 
        {
        value: '3',
        label: '经管学院'
        }, 
        {
        value: '4',
        label: '文法学院'
        }, 
        {
        value: '5',
        label: '冶金学院'
        }, 
      ],
      
      dialogTableVisible: false,
      account_edit:[
        {
          "uid":"",
          "input_name":"",
          "input_email":"",
          "input_name2":"",
          "input_phonenumber":"",
        }
      ],
        }

            },


  methods: {
  uploadFile(item){
    console.log("uploadFile")
    const fileObj = item.file
    let msgForm = new FormData()
    msgForm.append('file',fileObj)
    msgForm.get("file")
    var url = '/user/import';
    console.log(msgForm)
    console.log(typeof msgForm)
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
      console.log("刷新")
      this.dialogTableVisible = true
        this.account_edit =[
        {
          "uid":"",
          "input_name":"",
          "input_email":"",
          "input_name2":"",
          "input_phonenumber":"",
        }
      ]
      console.log(this.account_edit)

    },
    update_account(row){
      console.log("update_account")
      this.$confirm('确认注册？')
          .then(_ => {
            console.log("注册")
          console.log(row.uid)
          // console.log(this.$route.path)
          var url = '/user/register';
          console.log("11111")
          console.log(row.college)
          this.axios.post(url,"uid="+row.uid+"&name="+row.input_name+"&e_mail="+row.input_email+"&realname="+row.input_name2+"&phone="+row.input_phonenumber+"&value="+row.value+"&college="+row.college).then(res => {
            console.log("看这里！")
            console.log(res.data)
            this.res_result = res.data
            // this.$message.error(res.msg)
          }).catch(error => {
            console.log(error)
          })            
        })
        .catch(_ => {
          console.log("不修改")
        });      
    },
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
