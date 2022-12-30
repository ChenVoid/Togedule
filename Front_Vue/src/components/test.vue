<!-- <template>
    <div class="inputYzm vfCode" v-if="isSidentify >= 3">
    <input placeholder="请输入验证码" v-model="sidentifyMode" />
    <div @click="refreshCode()" class="vfCodeComponents" title="点击切换验证码">
    <v-sidentify :identifyCode="identifyCode"></v-sidentify>
    </div>
    </div>
</template>



<script>
export default {
    data(){
	return {
	  isSidentify: 0,
      sidentifyMode: '',
      identifyCode: '',
      identifyCodes: ['0','1','2','3'...'a','b','c'...'z']//验证码出现的数字和字母
	}
},
methods:{
	//登录
	submit() {
		if (this.isSidentify >= 3) {
	        if (!this.sidentifyMode) {
	          this.$message({
	            type: 'warning',
	            duration: '2000',
	            message: '验证码不能为空！'
	          })
	          return
	        }
	        if (this.sidentifyMode.toLowerCase() != this.identifyCode.toLowerCase()) {
	          this.$message({
	            type: 'warning',
	            duration: '2000',
	            message: '验证码错误！'
	          })
	          this.refreshCode()
	          return
	        }
        }
	},
    // 生成随机数
    randomNum(min, max) {
      max = max + 1
      return Math.floor(Math.random() * (max - min) + min)
    },
    // 更新验证码
    refreshCode() {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
      // console.log('当前验证码:', this.identifyCode)
    },
    // 随机生成验证码字符串
    makeCode(data, len) {
      // console.log('data, len:', data, len)
      for (let i = 0; i < len; i++) {
        this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length - 1)]
      }
    },
}

}
</script>

<style>
.vfCode {
  background: #fff;
  width: 180px;
  height: 50px;
  border-radius: 25px;
  border: solid 1px #13c2c0;
  margin-top: 38px;
  .inputYzm {
    background: white url('../img/login-yzm.png') no-repeat 15px center;
    background-size: 35px 35px;
  }
  input {
    background: none;
    border: none;
    outline: none;
    width: 130px;
    height: 100%;
    margin-left: 60px;
    font-size: 16px;
    border-radius: 0px 35px 35px 0px;
    box-shadow: inset 0 0 0 1000px #fff !important;
  }
  .vfCodeComponents {
    position: relative;
    bottom: 43px;
    left: 219px;
    cursor: pointer;
  }
}

</style> -->