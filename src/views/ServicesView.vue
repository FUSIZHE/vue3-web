<template>
  <div class="container">
    <div class="title">
      <p>定制服务</p>
    </div>
    <div class="subtitle">
      <p>个性化推荐</p>
      <p>优秀案例</p>
      <p>最近上新</p>
    </div>
    <div class="box-1">
      <div class="header">推荐选择</div>
      <div class="list">
        <div class="item" v-for="item in list">
          <img :src="item.imgSrc" alt="" />
          <p class="title">{{ item.title }}</p>
          <p class="address">{{ item.address }}</p>
          <p class="opt" @click="handleRouter('/setting')">订阅</p>
        </div>
      </div>
    </div>
    <div class="box-2">
      <div class="header">时间选择</div>
      <div class="date">
        <p>周一</p>
        <p>周二</p>
        <p>周三</p>
        <p>周四</p>
        <p>周五</p>
        <p>周六</p>
        <p>周日</p>
      </div>
      <div class="list">
        <div class="item" v-for="item in dateList">
          {{ item }}
        </div>
      </div>
    </div>
    <div class="box-3">
      <div class="header">额外信息</div>
      <div class="desc">
        点击此处了解更多关于我们的咨询服务、定价和用户期望的信息。
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const handleRouter = (path) => {
  router.push(`${path}`);
};
const list = [
  {
    imgSrc:
      "https://img2.baidu.com/it/u=1762657131,1457713426&fm=253&fmt=auto&app=120&f=JPEG?w=530&h=500",
    title: "我不是劳大~",
    address: "洛圣都机场",
  },
  {
    imgSrc:
      "https://img2.baidu.com/it/u=1762657131,1457713426&fm=253&fmt=auto&app=120&f=JPEG?w=530&h=500",
    title: "我不是劳大~",
    address: "洛圣都机场",
  },
  {
    imgSrc:
      "https://img2.baidu.com/it/u=1762657131,1457713426&fm=253&fmt=auto&app=120&f=JPEG?w=530&h=500",
    title: "我不是劳大~",
    address: "洛圣都机场",
  },
];
const dateList = ref([
  "9:00",
  "9:00",
  "19:00",
  "9:00",
  "19:00",
  "9:00",
  "19:00",
  "9:00",
  "19:00",
  "9:00",
]);
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 40px;
  .title {
    align-self: center;
    font-size: 30px;
    font-weight: bold;
  }
  .subtitle {
    display: flex;
    gap: 15px;
    color: #818181;
  }
  .box-1 {
    display: flex;
    flex-direction: column;
    gap: 15px;
    .header {
      font-size: 20px;
      font-weight: bold;
    }
    .list {
      display: flex;
      gap: 15px;
      .item {
        width: 300px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        img {
          align-self: center;
          width: 100px;
          height: 100px;
        }
        .title {
          font-weight: 500;
          font-size: 15px;
        }
        .address {
          font-size: 13px;
          color: #818181;
        }
        .opt {
          background-color: rgb(0, 0, 255);
          color: white;
          width: 50%;
          padding: 5px;
          border-radius: 15px;
          display: flex;
          justify-content: center;
          cursor: pointer;
        }
      }
    }
  }
  .box-2 {
    display: flex;
    flex-direction: column;
    gap: 15px;
    .header {
      font-size: 20px;
      font-weight: bold;
    }
    .date {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 15px;
    }
    .list {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 15px;
      .item {
        background-color: #fdf6ec;
        color: #e6a23c;
        padding: 7px 13px;
      }
    }
  }
  .box-3 {
    display: flex;
    flex-direction: column;
    gap: 15px;
    .header {
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
