<template>
  <div class="box">
    <p>sbsbsb:{{typeof data_test}}</p>
    <!-- <p>sbsbsb:{{data_test1}}</p> -->
    <el-row :gutter="10">
      <el-col :span="13">
        <div>
          
          <el-card class="content">
            <el-row :gutter="30">
              
              <el-col :span="24" style="padding-left: 0;padding-right: 0">
                
                <div id="main" style="width: 540px;height:320px;margin-left: auto"></div>
              </el-col>
              
              <el-col :span="24">
                <el-descriptions class="descriptions" :column="4" border size="mini">
                  
                  <el-descriptions-item span="1">
                    <template slot="label" style="font-size: large">
                      <i class="iconfont icon-shidu" style="color: #2381BF"></i>
                      教学
                    </template>
                    <!-- {{this.state.Humidity}} -->
                  </el-descriptions-item>
                  <el-descriptions-item span="1">
                    <template slot="label">
                      <i class="iconfont icon-shiwen"></i>
                      实验
                    </template>
                    <!-- {{this.state.Temperature}} -->
                  </el-descriptions-item>
                  
                  <el-descriptions-item span="1">
                    <template slot="label">
                      <i class="iconfont icon-huozaishigu" style="color:#D90C0C;"></i>
                      空闲
                    </template>
                    <!-- <el-tag size="mini"
                            :type="this.state.fire_state === ('safe') ? 'success':'danger'">{{this.state.fire_state === ('safe') ? "安全":"火灾"}}</el-tag> -->
                  </el-descriptions-item>
                </el-descriptions>
              </el-col>
              <!-- <el-col :span="24">
                <el-button type="primary" @click="control"  size="small">控制</el-button>
                <el-button type="primary" @click="video"  size="small">实时监控</el-button>
                <el-button type="info" @click="exit"  size="small">返回</el-button>
                <el-button type="info" @click="test"  size="small">测试</el-button>
              </el-col> -->
            </el-row>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script>
import * as echarts from 'echarts'
export default {
  name: "StudentClassroom_Detail",
  data(){
    return {
      data_test: this.$route.params["json_test"],
      // data_test1: data_test[0],
      option : {
        title: {
          text: '教室使用情况',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: '学生状态',
            type: 'pie',
            radius: '75%',
            //[0,1,2,3,4]对应[空座位,坐着,站着,趴着,举手]
            data: [
              { value: 0, name: '教学'},
              { value: 0, name: '实验' },
              { value: 0, name: '空闲' },
              // { value: 0, name: '趴着' },
              // { value: 0, name: '举手' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          },
        ]
        ,grid: {
          x: 0, //距离左边
          x2: 0, //距离右边
          y:0, //距离上边
          y2:0,//距离下边
          left:0,
          right:0,
          top:0,
          bottom:0
        },
      },
    }
  },
  methods: {
  }


}
</script>

<style lang="less" scoped>
/deep/.el-main{
  padding-top: 10px;
  padding-left: 5px;
}
/deep/.el-card__body {
  padding-left: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.descriptions{
  margin-bottom: 5px;
}
.el-radio {
  //添加边框
  // border: 1px solid rgb(207, 204, 204);
  //选中时边框的颜色
  &.is-checked {
    // border: 1px solid #28AC5D !important;
  }

  //鼠标滑过改变字体和小圆圈边框的样式
  &:hover {
    border-color: #28AC5D !important;
    // color: #28AC5D !important;
    //鼠标滑过时小圆点边框显示
    .el-radio__inner {
      border-color: #28AC5D;
    }
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.banner{
  width: 520px;
}
img {
  width: 100%;
  height: inherit;
}
.descriptions{
  font-size: small;
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