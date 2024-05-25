import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "layout",
      component: () => import("@/views/Layout.vue"),
      redirect: "/sensing",
      children: [
        {
          // 主页
          path: "/home",
          name: "home",
          component: () => import("../views/HomeView.vue"),
        },
        {
          // 订阅页面
          path: "/subscribe",
          name: "subscribe",
          component: () => import("../views/SubscribeView.vue"),
        },
        {
          // 页面
          path: "/selection",
          name: "selection",
          component: () => import("../views/SelectionView.vue"),
        },
        {
          // 页面
          path: "/chart",
          name: "chart",
          component: () => import("../views/ChartView.vue"),
        },
        {
          // 定制页面
          path: "/setting",
          name: "setting",
          component: () => import("../views/Setting.vue"),
        },
        {
          // 定制页面
          path: "/services",
          name: "services",
          component: () => import("../views/ServicesView.vue"),
        },
        // RecommendationView
        {
          // 定制页面
          path: "/recommendation",
          name: "recommendation",
          component: () => import("../views/RecommendationView.vue"),
        },
        {
          // 定制页面
          path: "/user",
          name: "user",
          component: () => import("../views/UserView.vue"),
        },
        {
          // 定制页面
          path: "/sensing",
          name: "sensing",
          component: () => import("../views/SensingView.vue"),
        },
        {
          // 定制页面
          path: "/site",
          name: "site",
          component: () => import("../views/SiteView.vue"),
        },
      ],
    },

  ],
});

export default router;
