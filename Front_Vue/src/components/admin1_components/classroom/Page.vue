<template>
  <div>
      <el-row :gutter="10">
        <!-- 楼宇选择区域 -->
        <!-- 查询区域 -->
        <el-col :span="4">
          <el-button type="primary" @click="flush()">刷新</el-button>
        </el-col>
      </el-row>
    <!-- 面包屑导航区域 -->

    <!-- 卡片视图区域 -->
      <!-- 搜索区域 -->

      <!-- 教室数据区域 -->

<!--      已废弃-->

      <!-- 分页 -->
      <div id="myChart"></div>
      <div class="echart" id="mychart" :style="myChartStyle"></div>

  </div>
</template>


<script>
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import * as echarts from 'echarts'  
export default {
  name: "Classroom_Basic",
      data () {
        return {
          xData: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], //横坐标
          yData: [23, 24, 18, 25, 27, 28, 25], //数据
      myChartStyle: { float: "left", width: "100%", height: "400px" }, //图表样式
            echartsOption: {	// echarts选项，所有绘图数据和样式都在这里设置
                legend: {	//图表上方的图例
                    data: ['教学', '实验', '空闲']
                },
                tooltip: {   //鼠标放到图上的数据展示样式
                    trigger: 'axis'
                },
                series: [{
                  name: '教室使用情况',
                  type: 'pie',
                  barWidth: '60%',
                  data: [	// 扇形图数据格式： {value, name}
                    {value: 0.35, name: '教学'},		// value不一定是比例，echarts会自动转换
                    {value: 0.25, name: '实验'},
                    {value: 0.2, name: '空闲'},
                  ],
                }],
            }
        }

            },
    mounted () {
        let myChart = echarts.init(document.getElementById('myChart'), 'light')	// 初始化echarts, theme为light
        myChart.setOption(this.echartsOption)	// echarts设置选项
        this.initEcharts();
    },

  methods: {
    flush(){
      var url = '/classroom/status/';
      this.axios.post(url).then(res => {
          console.log("看这里！")
          console.log(res.data)
          this.res_result = res.data
          console.log("this.echartsOption.series[0].data[0]")
          console.log(this.echartsOption.series[0].data)
          this.echartsOption.series[0].data = [	
                    {value: res.data["teach"], name: '教学'},		
                    {value: res.data["experiment"], name: '实验'},
                    {value: res.data["free"], name: '空闲'},
                  ]
          this.xData = [res.data["1"],res.data["2"],res.data["3"],res.data["4"],res.data["5"]]
          this.yData = [res.data["frequence1"],res.data["frequence2"],res.data["frequence3"],res.data["frequence4"],res.data["frequence5"]]
          console.log(this.echartsOption.series[0].data)
        let myChart = echarts.init(document.getElementById('myChart'), 'light')	// 初始化echarts, theme为light
        myChart.setOption(this.echartsOption)	// echarts设置选项
                this.initEcharts();
          // this.$message.error(res.msg)
      }).catch(error => {
        console.log(error)
      })
    },
    initEcharts() {
      // 基本柱状图
      const option = {
        xAxis: {
          data: this.xData
        },
        yAxis: {},
        series: [
          {
            type: "bar", //形状为柱状图
            data: this.yData
          }
        ]
      };
      const myChart = echarts.init(document.getElementById("mychart"));
      myChart.setOption(option);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }

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
#myChart{
  width: 100%;
  height: 500px;
  margin: 0 auto;
  margin-top: 5%;
}
</style>
