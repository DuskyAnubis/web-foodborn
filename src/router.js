import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    component: resolve => require(['./views/home/Home.vue'], resolve),
    children: [{
      path: '/DictionaryManager',
      component: resolve => require(['./views/dictonary/Dictonary.vue'], resolve)
    },
    {
      path: '/OrgnazitionManager',
      component: resolve => require(['./views/orgnazition/Orgnazition.vue'], resolve)
    },
    {
      path: '/PowerManager',
      component: resolve => require(['./views/permission/Permission.vue'], resolve)
    },
    {
      path: '/RoleManager',
      component: resolve => require(['./views/role/Role.vue'], resolve)
    },
    {
      path: '/UserManager',
      component: resolve => require(['./views/user/User.vue'], resolve)
    },
    {
      path: '/PatientManager',
      component: resolve => require(['./views/patient/Patient.vue'], resolve)
    },
    {
      path: '/PatientDetail',
      component: resolve => require(['./views/patient/PatientDetail.vue'], resolve)
    },
    {
      path: '/UploadMedicalRecord',
      component: resolve => require(['./views/patient/UploadMedicalRecord.vue'], resolve)
    }
    ]
  },
  {
    path: '/login',
    component: resolve => require(['./views/login/Login.vue'], resolve)
  },
  {
    path: '*',
    redirect: '/home'
  }
  ]
})
