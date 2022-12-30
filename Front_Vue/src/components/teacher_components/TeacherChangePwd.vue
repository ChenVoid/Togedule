<template>
  <div class="login_container">
    <div class="login_box">
      <!--      头像区域-->
      <!-- this.$route.params.alert -->
      <div class="avatar_box">
        <img src="../../assets/ChangePwd.png" alt="" />
      </div>
      <!--      表单提交区域-->
      <el-form :rules="changeFormRules" ref="loginFormRef" label-width="0px" class="login_form" :model="changeForm">


        <!--        密码-->
        <el-form-item prop="password">
          <el-input placeholder="请输入新密码" show-password v-model="changeForm.new_password" prefix-icon="iconfont icon-3702mima"></el-input>
        </el-form-item>

        <!--        按钮区-->
        <el-form-item class="btns">
          <el-button type="primary" @click="changepwd">修改密码</el-button>
          <!-- <el-button type="info" @click="changePwd">修改密码</el-button> -->
          <!-- <el-button type="info" @click="resetLoginForm">重置</el-button> -->
        </el-form-item>
      </el-form>

      <!-- <a href=html_test>asd</a> -->

    </div>
  </div>
</template>


<script>
export default {
  name: "TeacherChangePwd",
  data() {
    return {
      changeForm: {
        new_password: ''
      },

      changeFormRules: {
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetLoginForm() {
      // 点击重置按钮,重置登录表单
      this.$refs.loginFormRef.resetFields()
    },
    changepwd(){
      var url = '/user/chgpwd'
      var new_password = this.changeForm.new_password

      this.axios.post(url, "password="+new_password

      ).then(res => {
          console.log("看这里！")
          console.log(res.data)
          

          if(res.data.code == 200){
            this.$message.success("密码修改成功！")
          }else{
            this.$message.error("修改失败")
          }
          
          // this.$router.go(0) 
        
      })
    }
    
  }
}
</script>

<style lang="less" scoped>
.login_container {
  height: 100%;
  background-color: #8de889;
}
.login_box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 240px;
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