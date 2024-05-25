<template>
  <div class="container-main">
    <!-- 页面公共头部 -->
    <header>
      <ul>
        <li class="logo">
          <img src="@/assets/images/logo.png" alt="Logo" />
        </li>
        <li style="font-size: 25px;color: #000;">山河智通</li>
        <li @click="handleRouter('/sensing')">首页</li>
        <li @click="handleRouter('/home')">数据探索</li>
        <li @click="handleRouter('/chart')">智能选择</li>
        <li @click="handleRouter('/services')">定制服务</li>
        <li @click="handleRouter('/user')">个人中心</li>
      </ul>
    </header>
    <!-- 内容区 -->
    <section>
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </section>

    <!-- 页面公共底部 -->
    <footer>
      <div class="footer-top">
        <el-tooltip
          class="box-item"
          effect="dark"
          content="QQ平台"
          placement="top"
        >
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-QQ"></use>
          </svg>
        </el-tooltip>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="微信平台"
          placement="top"
        >
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-weixin"></use>
          </svg>
        </el-tooltip>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="微博平台"
          placement="top"
        >
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-weibo"></use>
          </svg>
        </el-tooltip>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="抖音平台"
          placement="top"
        >
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-douyin"></use>
          </svg>
        </el-tooltip>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="网易云平台"
          placement="top"
        >
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-wangyiyunyinle"></use>
          </svg>
        </el-tooltip>
      </div>
      <div class="footer-bottom">
        <p>
          关于 | 服务条款 | 商务洽谈 | 招聘 | 公益 | 版权所有 | 隐私政策 |
          用户权限
        </p>
        <p>版本号: 8.4.4 Copyright ©2023-2024 . All Rights Reserved</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const handleRouter = (path) => {
  router.push(`${path}`);
};
</script>

<style lang="scss" scoped>
.container-main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  header {
    margin: auto;
    width: 100%;
    min-width: 1350px;
    height: 70px;
    background-color: rgb(241, 241, 241);
    display: flex;
    align-items: center;
    /* justify-content: center; */
    position: sticky;
    top: 0px;
    z-index: 1000;
    ul {
      width: 1350px;
      margin: auto;
      display: flex;
      height: 100%;
      align-items: center;
      li {
        list-style: none;
        margin: 10px;
        height: 100%;
        padding: 10px 15px;
        cursor: pointer;
        display: grid;
        place-content: center;
        color: #818181;
      }
      .logo {
        img {
          width: 70px; /* 调整后的宽度 */
          height: auto;
        }
      }
    }
  }
  section {
    /* padding-bottom: 50px; */
    flex: 1;
  }
  footer {
    width: 100%;
    height: 200px;
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .footer-top {
      .icon {
        width: 30px;
        height: 30px;
        margin: 0 20px;
        &:hover {
          transform: scale(1.1);
          cursor: pointer;
        }
      }
    }
    .footer-bottom {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
      gap: 20px;
      p {
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
