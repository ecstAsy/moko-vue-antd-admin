/*
 * @Author: ecstAsy
 * @Date: 2021-12-02 13:37:15
 * @LastEditTime: 2022-01-04 13:12:07
 * @LastEditors: ecstAsy
 */

import { RouteRecordRaw } from "vue-router";
import { UserLayout, BlankLayout, BasicLayout } from "@/layouts";

const AsyncRouterMap: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: BasicLayout,
    redirect: "/dashboard",
    meta: { title: "首页", permission: ["admin"] },
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        meta: {
          title: "工作台", icon: "dashboard-filled", keepAlive: true, permission: ["admin"],
        },
        component: () => import("@/views/dashboard/index.vue"),
      },
      {
        path: "/list",
        name: "List",
        redirect: "/list/search",
        meta: {
          title: "列表", icon: "sliders-filled", keepAlive: true, permission: ["admin"],
        },
        component: BlankLayout,
        children: [
          {
            path: "/list/query-list",
            name: "ListQuery",
            meta: {
              title: "查询列表", keepAlive: true, permission: ["admin"],
            },
            component: () => import("@/views/list/query/index.vue"),
          }, {
            path: "/list/basic-list",
            name: "ListBasic",
            meta: {
              title: "无限列表", keepAlive: true, permission: ["admin"],
            },
            component: () => import("@/views/list/basic/index.vue"),
          }, {
            path: "/list/card-list",
            name: "ListCard",
            meta: {
              title: "卡片列表", keepAlive: true, permission: ["admin"],
            },
            component: () => import("@/views/list/card/index.vue"),
          },
        ],
      },
      {
        path: "/form",
        name: "Form",
        redirect: "/form/basic-form",
        meta: {
          title: "表单", icon: "filter-filled", keepAlive: false, permission: ["admin"],
        },
        component: BlankLayout,
        children: [
          {
            path: "/form/basic-form",
            name: "FormBasic",
            meta: { title: "基础表单", permission: ["admin"] },
            component: () => import("@/views/form/basic.vue"),
          }, {
            path: "/form/step-form",
            name: "FormStep",
            meta: { title: "分步表单", permission: ["admin"] },
            component: () => import("@/views/form/step/index.vue"),
          }, {
            path: "/form/advanced-form",
            name: "FormAdvanced",
            meta: { title: "富文本", permission: ["admin"] },
            component: () => import("@/views/form/advanced.vue"),
          },
        ],
      },

      {
        path: "/result",
        name: "Result",
        meta: {
          title: "结果", icon: "message-filled", keepAlive: false, permission: ["admin"],
        },
        component: BlankLayout,
        children: [
          {
            path: "/result/success",
            name: "ResultSuccess",
            meta: { title: "成功", keepAlive: false, permission: ["admin"] },
            component: () => import("@/views/result/success.vue"),
          }, {
            path: "/result/fail",
            name: "ResultFail",
            meta: { title: "失败", keepAlive: false, permission: ["admin"] },
            component: () => import("@/views/result/fail.vue"),
          },
        ],
      },
      {
        path: "/exception",
        name: "Exception",
        redirect: "/exception/404",
        meta: {
          title: "异常", icon: "exclamation-circle-filled", keepAlive: false, permission: ["admin"],
        },
        component: BlankLayout,
        children: [
          {
            path: "/exception/403",
            name: "403",
            meta: { title: "403", keepAlive: false, permission: ["admin"] },
            component: () => import("@/views/exception/403.vue"),
          },
          {
            path: "/exception/404",
            name: "404",
            meta: { title: "404", keepAlive: false, permission: ["admin"] },
            component: () => import("@/views/exception/404.vue"),
          },
          {
            path: "/exception/500",
            name: "500",
            meta: { title: "500", keepAlive: false, permission: ["admin"] },
            component: () => import("@/views/exception/500.vue"),
          },
        ],
      },
    ],
  },
  // 基础路由
  {
    path: "/user",
    redirect: "/user/login",
    component: UserLayout,
    children: [
      {
        path: "login",
        name: "UserLogin",
        component: () => import(/* webpackChunkName: "login" */ "@/views/user/login.vue"),
      },
    ],
  },
];
export default AsyncRouterMap;
