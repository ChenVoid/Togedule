<template>
  <div class="login_container">
    <div class="login_box">
      <!--      头像区域-->
      <!-- this.$route.params.alert -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <!--      表单提交区域-->
      <el-form :rules="loginFormRules" ref="loginFormRef" label-width="0px" class="login_form" :model="loginForm">

      <!-- 用户类型 -->
        <el-form-item prop="usertype">
          <el-select v-model="loginForm.usertype" placeholder="选择用户类型" size="">
                <el-option
                    v-for="item in user_options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
          <!-- <el-input placeholder="请输入用户类型" v-model="loginForm.usertype" prefix-icon="iconfont icon-user"></el-input> -->
        </el-form-item>

        <!--        用户名-->
        <el-form-item prop="username">
          <el-input placeholder="请输入账号" v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
        </el-form-item>

        <!--        密码-->
        <el-form-item prop="password">
          <el-input placeholder="请输入密码" show-password v-model="loginForm.password" prefix-icon="iconfont icon-3702mima"></el-input>
        </el-form-item>

        <!--        按钮区-->
        <el-form-item class="btns">
          <el-button type="primary" @click="login" :loading="loginLoading">登录</el-button>
          <!-- <el-button type="info" @click="changePwd">修改密码</el-button> -->
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>

      <!-- <a href=html_test>asd</a> -->

    </div>
  </div>
</template>


<script>
export default {
  name: "Login",
  data() {
    return {
      // html_test : "D:\\Projects\\VSCodeProjects\\VueProjects\\course.html",

      loginLoading: false, // 登录限制
      loginForm: {
        // 登录的表单数据的绑定对象
        usertype: '',
        username: '',
        password: ''
      },

      user_options: [
        {
          value: 'Student',
          label: '学生'
        },{
          value: 'Teacher',
          label: '教师'
        },{
          value: 'SchoolManager',
          label: '学校管理员'
        },{
          value: 'AcademyManager',
          label: '学院管理员'
        }
        ],

      loginFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetLoginForm() {
      // 点击重置按钮,重置登录表单
      this.$refs.loginFormRef.resetFields()
    },


    login(){
      var url = '/user/login'
      var username = this.loginForm.username
      var password = this.loginForm.password
      var usertype = this.loginForm.usertype
      // 登录密码错误提醒
      // try {
        // this.axios.post(url, "username="+username+"&password="+password+"&usertype="+usertype
        window.sessionStorage.setItem('token', 0)
        this.$router.push('/home')

        // ).then(res => {
        //   console.log("看这里！")
        //   console.log(res.data)
        //   this.$router.push('/home')
          

          // if(res.data.code == 200){
          //   if(usertype == "SchoolManager"){
          //     window.sessionStorage.setItem('token', res.data.token)
          //     this.$router.push('/home')
          //   }else if(usertype == "Teacher"){
          //     window.sessionStorage.setItem('token', res.data.token)
          //     this.$router.push('/teacherhome')
          //   }else if(usertype == "Student"){
          //     window.sessionStorage.setItem('token', res.data.token)
          //     this.$router.push('/studenthome')
          //   }else if(usertype == "AcademyManager"){
          //     window.sessionStorage.setItem('token', res.data.token)
          //     this.$router.push('/home1')
          //   }
          //   this.$message.success(usertype + "登陆成功！")
          // }else{
          //   this.$message.error(usertype + "用户名或密码错误！")
          // }
        
      // })
      // }catch(error){
      //     // console.log(error)
      //     this.$message.error(usertype + "用户名或密码错误！")
      // }

      
    }
    
  }
}
</script>

<style lang="less" scoped>
.login_container {
  height: 100%;
  background-color: #39b8c9;
}
.login_box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 360px;
  background-color: #fff;
  border-radius: 3px;
  .avatar_box {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    box-shadow: 0 0 10px #ddd;
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eeeeee;
    }
  }
  .login_form {
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
  }
  .btns {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
