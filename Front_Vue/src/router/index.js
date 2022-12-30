import Vue from 'vue'
import VueRouter from 'vue-router'
// admin
import Login from "@/components/Login";
import Home from "@/components/admin_components/Home";
import Welcome from "@/components/admin_components/Welcome";
import User from "@/components/admin_components/users/User";

import Home1 from "@/components/admin1_components/Home";
import Welcome1 from "@/components/admin1_components/Welcome";
import User1 from "@/components/admin1_components/users/User";

// import ChangePwd from "@/components/ChangePwd";

import User_Done from "@/components/admin_components/users/User_Done"

//import Classroom from "@/components/admin_components/classroom/Classroom";
import Classroom_Basic from "@/components/admin_components/classroom/Classroom_Basic";
import Classroom_Use from "@/components/admin_components/classroom/Classroom_Use";
import Classroom_Device from "@/components/admin_components/classroom/Classroom_Device";
import Classroom_Capacity from "@/components/admin_components/classroom/Classroom_Capacity";
import Classroom_Require from "@/components/admin_components/classroom/Classroom_Require";
import Classroom_Detail from "@/components/admin_components/classroom/Classroom_Detail";
import Classroom_User from "@/components/admin_components/classroom/Classroom_User";
import Classroom_User_Manage from "@/components/admin_components/classroom/Classroom_User_Manage";
import Classrooms_Showcourse from "@/components/admin_components/classroom/Classrooms_Showcourse";
import Page from "@/components/admin_components/classroom/Page";
import Course from "@/components/admin_components/classroom/Course";
import Classroom_User_Regist from "@/components/admin_components/classroom/Classroom_User_Regist";

// import Devices from "@/components/admin_components/devices/Devices";
// import Campus from "@/components/admin_components/campus/Campus";
// import Building from "@/components/admin_components/building/Building";
import Detail from "@/components/admin_components/classroom/Detail";
import Echarts from "@/components/admin_components/Echarts";
import Video from "@/components/admin_components/Video";

import Class from "@/components/admin_components/class/Class";
import Class_Repo_Add from "@/components/admin_components/class/Class_Repo_Add";
import Class_Form_Add from "@/components/admin_components/class/Class_Form_Add";
import Class_Minus from "@/components/admin_components/class/Class_Minus";

//schoolManager




// teacher
import TeacherHome from "@/components/teacher_components/TeacherHome";
import TeacherWelcome from "@/components/teacher_components/TeacherWelcome";
// import TeacherBuilding from "@/components/teacher_components/teacherbuilding/TeacherBuilding"
// import TeacherCampus from "@/components/teacher_components/teachercampus/TeacherCampus"
import TeacherClassroom from "@/components/teacher_components/teacherclassroom/TeacherClassroom"

import TeacherClassroom_Use from "@/components/teacher_components/teacherclassroom/TeacherClassroom_Use"
// import TeacherClassroom_Order from "@/components/teacher_components/teacherclassroom/TeacherClassroom_Order"
import TeacherClassroom_Require from "@/components/teacher_components/teacherclassroom/TeacherClassroom_Require"

import TeacherClass from "@/components/teacher_components/teacherclass/TeacherClass"
import TeacherClass_Plus from "@/components/teacher_components/teacherclass/TeacherClass_Plus"
import TeacherClass_Minus from "@/components/teacher_components/teacherclass/TeacherClass_Minus"

import TeacherBooking_with_Room from "@/components/teacher_components/teacherbooking/TeacherBooking_with_Room"
import TeacherBooking_with_Time from "@/components/teacher_components/teacherbooking/TeacherBooking_with_Time"
import TeacherClassroom_Order from "@/components/teacher_components/teacherbooking/TeacherClassroom_Order"
import TeacherSearch_Res from "@/components/teacher_components/teacherbooking/TeacherSearch_Res"

//修改密码
import TeacherChangePwd from "@/components/teacher_components/TeacherChangePwd"

import TeacherAttendance from "@/components/teacher_components/teacherattendance/TeacherAttendance"





// student
import StudentHome from "@/components/student_components/StudentHome";
import StudentWelcome from "@/components/student_components/StudentWelcome";
// import StudentBuilding from "@/components/student_components/studentbuilding/StudentBuilding"
// import StudentCampus from "@/components/student_components/studentcampus/StudentCampus"
import StudentClassroom from "@/components/student_components/studentclassroom/StudentClassroom"
// import StudentUser from "@/components/student_components/studentusers/StudentUser"

import StudentClassroom_Use from "@/components/student_components/studentclassroom/StudentClassroom_Use"
import StudentClassroom_Detail from "@/components/student_components/studentclassroom/StudentClassroom_Detail"
import StudentClassroom_Order from "@/components/student_components/studentclassroom/StudentClassroom_Order"
import StudentClassroom_Require from "@/components/student_components/studentclassroom/StudentClassroom_Require"

import StudentClass_Search from "@/components/student_components/studentclass_search/StudentClass_Search"

import StudentBooking_with_Room from "@/components/student_components/studentbooking/StudentBooking_with_Room"
import StudentBooking_with_Time from "@/components/student_components/studentbooking/StudentBooking_with_Time"
// import StudentClassroom_Order from "@/components/student_components/studentbooking/StudentClassroom_Order"
import StudentSearch_Res from "@/components/student_components/studentbooking/StudentSearch_Res"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  // {
  //   path: '/changepwd',
  //   name: 'changepwd',
  //   component: ChangePwd
  // },
  {
    path: '/home1',
    component: Home1,
    redirect: '/welcome',
    //子路由
    children: [
      {
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/users',
        name: 'users',
        component: User
      },
      {
        path: '/users_done',
        name: 'users_done',
        component: User_Done
      },
      {
        path: '/classrooms_basic',
        name: 'classrooms_basic',
        component: Classroom_Basic
      },
      {
        path: '/classrooms_use',
        name: 'classrooms_use',
        component: Classroom_Use
      },      
      {
        path: '/classrooms_device',
        name: 'classrooms_device',
        component: Classroom_Device
      },   
      {
        path: '/classrooms_capacity',
        name: 'classrooms_capacity',
        component: Classroom_Capacity
      },     
      {
        path: '/classrooms_require',
        name: 'classrooms_require',
        component: Classroom_Require
      },     
      {
        path: '/classrooms_detail',
        name: 'classrooms_detail',
        component: Classroom_Detail
      },     
      {
        path: '/classrooms_user',
        name: 'classrooms_user',
        component: Classroom_User
      },  
      {
        path: '/page',
        name: 'page',
        component: Page
      },  
      {
        path: '/course',
        name: 'course',
        component: Course
      }, 

      {
        path: '/classrooms_user_manage',
        name: 'classrooms_user_manage',
        component: Classroom_User_Manage
      },   
      {
        path: '/classrooms_user_regist',
        name: 'classrooms_user_regist',
        component: Classroom_User_Regist
      }, 
      {
        path: '/classrooms_showcourse',
        name: 'classrooms_showcourse',
        component: Classrooms_Showcourse
      }, 
      {
        path: '/class',
        name: 'class',
        component: Class
      },
      {
        path: '/class_repo_add',
        name: 'class_repo_add',
        component: Class_Repo_Add
      },
      {
        path: '/class_form_add',
        name: 'class_form_add',
        component: Class_Form_Add
      },
      {
        path: '/class_minus',
        name: 'class_minus',
        component: Class_Minus
      },   
      // {
      //   path: '/devices',
      //   component: Devices
      // },
      // {
      //   path: '/campus',
      //   component: Campus
      // },
      // {
      //   path: '/buildings',
      //   component: Building
      // },
      {
        path: '/detail',
        component: Detail
      },
      {
        path: '/echarts',
        component: Echarts
      },
      {
        path: '/video',
        component: Video
      },

    ]
  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    //子路由
    children: [
      {
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/users',
        name: 'users',
        component: User
      },
      {
        path: '/users_done',
        name: 'users_done',
        component: User_Done
      },
      {
        path: '/classrooms_basic',
        name: 'classrooms_basic',
        component: Classroom_Basic
      },
      {
        path: '/classrooms_use',
        name: 'classrooms_use',
        component: Classroom_Use
      },      
      {
        path: '/classrooms_device',
        name: 'classrooms_device',
        component: Classroom_Device
      },   
      {
        path: '/classrooms_capacity',
        name: 'classrooms_capacity',
        component: Classroom_Capacity
      },     
      {
        path: '/classrooms_require',
        name: 'classrooms_require',
        component: Classroom_Require
      },     
      {
        path: '/classrooms_detail',
        name: 'classrooms_detail',
        component: Classroom_Detail
      },     
      {
        path: '/classrooms_user',
        name: 'classrooms_user',
        component: Classroom_User
      },  
      {
        path: '/page',
        name: 'page',
        component: Page
      },  
      {
        path: '/course',
        name: 'course',
        component: Course
      }, 

      {
        path: '/classrooms_user_manage',
        name: 'classrooms_user_manage',
        component: Classroom_User_Manage
      },   
      {
        path: '/classrooms_user_regist',
        name: 'classrooms_user_regist',
        component: Classroom_User_Regist
      }, 
      {
        path: '/classrooms_showcourse',
        name: 'classrooms_showcourse',
        component: Classrooms_Showcourse
      }, 
      {
        path: '/class',
        name: 'class',
        component: Class
      },
      {
        path: '/class_repo_add',
        name: 'class_repo_add',
        component: Class_Repo_Add
      },
      {
        path: '/class_form_add',
        name: 'class_form_add',
        component: Class_Form_Add
      },
      {
        path: '/class_minus',
        name: 'class_minus',
        component: Class_Minus
      },   
      // {
      //   path: '/devices',
      //   component: Devices
      // },
      // {
      //   path: '/campus',
      //   component: Campus
      // },
      // {
      //   path: '/buildings',
      //   component: Building
      // },
      {
        path: '/detail',
        component: Detail
      },
      {
        path: '/echarts',
        component: Echarts
      },
      {
        path: '/video',
        component: Video
      },

    ]
  },
  {
    path: '/teacherhome',
    component: TeacherHome,
    redirect: '/teacherwelcome',
    //子路由
    children: [
      {
        path: '/teacherwelcome',
        component: TeacherWelcome
      },
      {
          path: '/teacherclassrooms_use',
          component: TeacherClassroom_Use
      },
      {
        path: '/teacherclassrooms_order',
        name:  'teacherclassrooms_order',
        component: TeacherClassroom_Order
      },
      {
        path: '/teacherclassrooms_require',
        name: 'teacherclassrooms_require',
        component: TeacherClassroom_Require
      },
      {
        path: '/teacherclass',
        name: 'teacherclass',
        component: TeacherClass
      },
      {
        path: '/teacherclass_plus',
        name: 'teacherclass_plus',
        component: TeacherClass_Plus
      },
      {
        path: '/teacherclass_minus',
        name: 'teacherclass_minus',
        component: TeacherClass_Minus
      },
      // {
      //   path: '/devices',
      //   component: Devices
      // },
      // {
      //   path: '/teachercampus',
      //   component: TeacherCampus
      // },
      // {
      //   path: '/teacherbuildings',
      //   component: TeacherBuilding
      // },
      {
        path: '/teacherbooking_with_room',
        name: 'teacherbooking_with_room',
        component: TeacherBooking_with_Room
      },
      {
        path: '/teacherbooking_with_time',
        name: 'teacherbooking_with_time',
        component: TeacherBooking_with_Time
      },
      {
        path: '/teachersearch_res',
        name: 'teachersearch_res',
        component: TeacherSearch_Res
      },
      {
        path: '/teacherchangepwd',
        name: 'teacehrchangepwd',
        component: TeacherChangePwd
      },
      {
        path: '/teacherattendance',
        name: 'teacehrattendance',
        component: TeacherAttendance
      },
      {
        path: '/detail',
        component: Detail
      },
      {
        path: '/echarts',
        component: Echarts
      },
      {
        path: '/video',
        component: Video
      },

    ]
  },

  {
    path: '/studenthome',
    component: StudentHome,
    redirect: '/studentwelcome',
    //子路由
    children: [
      {
        path: '/studentwelcome',
        component: StudentWelcome
      },
      // {
      //   path: '/studentusers',
      //   component: StudentUser
      // },
      {
        path: '/studentclassrooms_use',
        component: StudentClassroom_Use
      },
      {
        path:'/studentclassrooms_detail',
        name:'studentclassrooms_detail',
        component: StudentClassroom_Detail
      },
      {
        path:"/studentclassrooms_order",
        name:'studentclassrooms_order',
        component: StudentClassroom_Order
      },
      {
        path:"/studentclassrooms_require",
        name:"studentclassrooms_require",
        component:StudentClassroom_Require
      },
      {
        path:"/studentclass_search",
        name:"studentclass_search",
        component:StudentClass_Search
      },
      {
        path: '/studentbooking_with_room',
        name: 'studentbooking_with_room',
        component: StudentBooking_with_Room
      },
      {
        path: '/studentbooking_with_time',
        name: 'studentbooking_with_time',
        component: StudentBooking_with_Time
      },
      {
        path: '/studentsearch_res',
        name: 'studentsearch_res',
        component: StudentSearch_Res
      },
      // {
      //   path: '/devices',
      //   component: Devices
      // },
      // {
      //   path: '/studentcampus',
      //   component: StudentCampus
      // },
      // {
      //   path: '/studentbuildings',
      //   component: StudentBuilding
      // },
      {
        path: '/detail',
        component: Detail
      },
      {
        path: '/echarts',
        component: Echarts
      },
      {
        path: '/video',
        component: Video
      },

    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})
//页面导航守卫，没登录就跳转回登录页面
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  // 获取token
  const token = window.sessionStorage.getItem('token')
  if (!token) return next('/login')
  next()
})
export default router
