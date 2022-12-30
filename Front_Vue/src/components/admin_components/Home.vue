<template>
  <el-container class="home-container">
    <!-- 首部栏 -->
    <el-header>
      <div>
        <img src="../../assets/logo.jpg" alt="" />
        <span>智能教室管理系统-管理员</span>
      </div>
      <div>
        <div style="font-size: medium; padding-right: 15px">admin</div>
        <el-button type="info" @click="logout">退出</el-button>
      </div>

    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '61px' : '200px'">
        <div class="toggle-button" @click="toggleCollpase">|||</div>
        <!-- 侧边栏菜单区域 -->
<!--        unique-opened :保证每次只有一个展开
            :router="true" 开启侧边栏的路由，会默认用index作为跳转路径，就不用一一配置
            :default-active="activePath" 使得侧边栏永远会高亮选中的组件
-->
        <el-menu
            background-color="#333744"
            text-color="#fff"
            active-text-color="#409EFF"
            unique-opened
            :collapse="isCollapse"
            :collapse-transition="false"
            :router="true"
            :default-active="activePath"
        >
          <el-submenu :index="item.id + ''" v-for="item in menuList" :key="item.id">
            <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <i :class="iconsObj[item.id]"></i>
              <span>{{ item.authName }}</span>
            </template>
              <el-menu-item :index="'/' + subItem.path" v-for="subItem in item.children" :key="subItem.id" @click="saveActivePath('/' + subItem.path)">
                <!-- 二级菜单的模板区域 -->
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>{{ subItem.authName }}</span>
                </template>
              </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 内容区域 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
import * as echarts from 'echarts'
export default {
  name: "Home.vue",
  data() {
    return {
      // 左侧菜单数据
      menuList: [
        //wt 
        {
          "id": 101,
          "authName": "主页",
          "path": "page",
          "children": [
            {
              "id": 1001,
              "authName": "主页",
              "path": "page"
            }
          ]
        },
        {
          "id": 102,
          "authName": "用户管理",
          //test
          "path": "classrooms",
          //
          "children": [
            {
              "id": 1002_3,
              "authName": "用户信息注册",
              "path": "classrooms_user_regist"
            },

            {
              "id": 1002_1,
              "authName": "用户信息管理",
              "path": "classrooms_user"
            },
            {
              "id": 1002_2,
              "authName": "用户组管理",
              "path": "classrooms_user_manage"
            },

          ]
        },
        {
          "id": 103,
          "authName": "教室管理",
          //test
          "path": "classrooms",
          //
          "children": [
            {
              "id": 1003_1,
              "authName": "教室基本信息管理",
              "path": "classrooms_basic"
            },
            {
              "id": 1003_2,
              "authName": "教室使用信息管理",
              "path": "classrooms_use"
            }
          ]
        },
        {
          "id": 104,
          "authName": "自动排课",
          "path": "course",
          "children": [
            {
              "id": 1004,
              "authName": "自动排课",
              "path": "course"
            }
          ]
        },
        
        //cp
        {
          "id": 105,
          "authName": "预约管理",
          "path": "users",
          "children": [
            {
              "id": 1005_1,
              "authName": "预约信息-未审批",
              "path": "users"
            },
            {
              "id": 1005_2,
              "authName": "预约信息-已审批",
              "path": "users_done"
            }
          ]
        },
        {
          "id": 106,
          "authName": "课程管理",
          "path": "class",
          "children": [
            {
              "id": 1006_1,
              "authName": "添加课程表",
              "path": "class_form_add"
            },
            {
              "id": 1006_2,
              "authName": "添加课程库",
              "path": "class_repo_add"
            },
            {
              "id": 1006_3,
              "authName": "删除课程",
              "path": "class_minus"
            }
          ]
        }
      ],
      iconsObj: {
        // 一级菜单的icon图标
        101: 'iconfont icon-xiaoquguanli',
        105: 'iconfont icon-louyushu',
        103: 'iconfont icon-jiaoshi',
        104: 'iconfont icon-shebei',
        102: 'iconfont icon-yonghu',
        107: 'iconfont icon-baobiao',
        // 107: 'iconfont icon-louyushu',
        106: 'iconfont icon-jiaoshi',
        // 105: 'iconfont icon-shebei',
        // 103: 'iconfont icon-yonghu',
        // 108: 'iconfont icon-baobiao'
      },
      isCollapse: false, // 是否折叠属性
      activePath: '', //当前页面的激活菜单路径
      welcome: {
        authName: '欢迎光临',
        id: 147,
        order: 1,
        path: '/welcome',
        children: [
          {
            authName: 'Welcome',
            id: 124,
            order: 1,
            path: 'welcome',
            children: []
          }
        ]
      }
    }
  },
  created() {
    this.getMenuList()
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push({ name: 'login'})
    },
    // 获取所有的菜单
    async getMenuList() {
      // const { data: res } = await this.$http.get('/menus')
      // if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      // this.$message.success(res.meta.msg)
      // res.data.unshift(this.welcome)
      // this.menuList = res.data
      // console.log(res, 'menus')

      //先用假数据
    },
    // 点击按钮,切换菜单的折叠和展开
    toggleCollpase() {
      this.isCollapse = !this.isCollapse
    },
    saveActivePath(activePath) {
      console.log(activePath)
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
      // console.log(this.$route.path)
    }
  }
}
</script>

<style lang="less" scoped>
.hwelcome {
  color: #fff;
  font-size: 15px;
  height: 25px;
  text-align: center;
  background: green;
  span {
    margin-left: 10px;
  }
}
.home-container {
  height: 100%;
}
.el-header {
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  background-color: #373d3f;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin-left: 10px;
    }
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background-color: #333744;
  .el-menu {
    border-right: none;
  }
}
.el-main {
  background-color: #eaedf1;
}
.iconfont {
  padding-right: 10px;
}
.toggle-button {
  background: #4a5064;
  font-size: 10px;
  text-align: center;
  line-height: 24px;
  color: #fff;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>