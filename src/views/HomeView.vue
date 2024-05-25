<template>
  <div class="home-container">
    <section class="home-map">
      <section class="left">
        <div class="header">地图探索</div>
        <div class="list">
          <div v-for="item in optList" class="item">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="item.icon"></use>
            </svg>
            <p>{{ item.title }}</p>
          </div>
        </div>
        <div class="opt" @click="handleRouter('subscribe')">前往下一页</div>
        <div class="detail">详情</div>
      </section>
      <section class="right">
        <!-- <div class="map" ref="mapRef"></div>
       -->
        <img src="../assets/images/微信截图_20240524204114.png" />
      </section>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { reqOptList } from "@/apis/home/index.js";
// 导入echarts模块
import * as echarts from "echarts";
import { useRouter } from "vue-router";
const router = useRouter();
const handleRouter = (path) => {
  router.push(`${path}`);
};
// 变量
const optList = ref([]);
let mapRef = ref(null);
// 生命周期钩子函数
onMounted(() => {
  getOptList();
  //绘图
  //  draw();
});

// 获取操作数据
const getOptList = async () => {
  let res = await reqOptList();
  if (res) {
    optList.value = res.data;
  }
};
// 绘图
const draw = () => {
  // 获取Mycharts实例
  const mycharts = echarts.init(deviceRef.value);
  // 构建options配置对象(渲染核心)
  const options = [];
  // 利用mycharts.setoption配置option
  mycharts.setOption(options);
};
</script>
<style lang="scss">
.home-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  margin: 10px 0;
  padding: 0 20px;

  /* 概览区 */
  .home-welcome {
    margin-top: 20px;
    min-width: 1200px;
    height: 200px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    gap: 10px;
    .welcome-box {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2),
        -5px -5px 5px rgba(255, 255, 255, 0.5);
      &-left {
        display: flex;
        align-items: center;
        justify-content: center;
        .icon {
          width: 100px;
          height: 100px;
        }
        &:hover {
          transform: scale(1.1);
          cursor: pointer;
        }
      }
      &-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p {
          &:nth-child(1) {
            font-size: 15px;
            margin-bottom: 20px;
          }
        }
      }
    }
  }
  /* 信息统计区 */
  .home-count {
    margin: 20px 0;
    min-width: 1200px;
    .home-device-header {
      span {
        display: inline-block;
        padding: 10px 15px;
        border-radius: 20px;
        color: white;
        background-image: linear-gradient(135deg, #97abff 10%, #123597 100%);
        &:hover {
          transform: scale(1.1);
          cursor: pointer;
        }
      }
    }
    .home-device-content {
      width: 100%;
      .content-device {
        width: 100%;
        height: 400px;
      }
    }
    .home-order-header {
      span {
        display: inline-block;
        padding: 10px 15px;
        border-radius: 20px;
        color: white;
        background-image: linear-gradient(135deg, #f6d242 10%, #ff52e5 100%);
        &:hover {
          transform: scale(1.1);
          cursor: pointer;
        }
      }
    }
    .home-order-content {
      width: 100%;
      .content-order {
        width: 100%;
        height: 400px;
      }
    }
  }
  .home-map {
    width: 100%;
    height: calc(100vh - 200px);
    margin: auto;
    display: flex;
gap: 20px;
    .left {
      width: 300px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      .list {
        display: flex;
        flex-direction: column;
        gap: 15px;
        .item {
          width: fit-content;
          display: flex;
          align-items: center;
          padding: 7px 13px;
          background-color: #ecf5ff;
          color: #409eff;
          border-radius: 5px;
          cursor: pointer;
          gap: 5px;
          svg {
            width: 20px;
            height: 20px;
          }
          p {
            font-size: 15px;
          }
        }
      }
      .opt{
        color: #67c23a;
        background-color: #f0f9eb;
        padding: 7px 13px;
        align-self: center;
        width: fit-content;
        cursor: pointer;
      }
      .detail{
        background-color:#fdf6ec ;
        color: #e6a23c;
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

    }
    .right {
      flex: 1;
      img {
        width: 100%;
        height: 100%
      }
    }
  }
}
</style>
