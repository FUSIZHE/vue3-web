<template>
  <div class="containers">
    <div class="banner">
      <img
        src="https://img2.baidu.com/it/u=3730241549,2477634416&fm=253&fmt=auto&app=138&f=JPEG?w=501&h=282"
        alt=""
      />
      <div class="info">
        <p>欢迎来到山河智通</p>
        <p>基于人工智能和大数据技术整合的遥感数据赋能要素交易平台</p>
      </div>
      <div class="mask"></div>
    </div>
    <div class="header">
      资讯
    </div>
    <div class="list-1">
      <div class="item" v-for="item in list_1">
        <img :src="item.imgSrc" alt="" />
        <p>{{ item.title }}</p>
      </div>
    </div>
    <div class="header">
      资讯
    </div>
    <div class="list-2">
      <div class="item" v-for="item in list_2">
      <div class="img">
        <img :src="item.imgSrc" alt="" />
        <p>{{ item.tip }}</p>
      </div>
      <div class="info">
        <p>{{ item.title }}</p>
        <p>{{ item.desc }}</p>
        <p>{{ item.opt }}</p>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const list_1 = ref([
  {
    imgSrc:
      "https://img0.baidu.com/it/u=2968903752,2101758121&fm=253&fmt=auto&app=138&f=JPEG?w=815&h=500",
    title: "鸟瞰图",
  },
  {
    imgSrc:
      "https://img0.baidu.com/it/u=29798512,1808469144&fm=253&fmt=auto&app=138&f=JPEG?w=908&h=500",
    title: "鸟瞰图",
  },
  {
    imgSrc:
      "https://img2.baidu.com/it/u=1900221144,1263960859&fm=253&fmt=auto&app=138&f=JPEG?w=765&h=500",
    title: "鸟瞰图",
  },
  {
    imgSrc:
      "https://img1.baidu.com/it/u=1491564743,2635835662&fm=253&fmt=auto&app=138&f=JPEG?w=782&h=500",
    title: "鸟瞰图",
  },
  {
    imgSrc:
      "https://img1.baidu.com/it/u=2835615387,3023268721&fm=253&fmt=auto&app=138&f=JPEG?w=796&h=500",
    title: "鸟瞰图",
  },
  {
    imgSrc:
      "https://img1.baidu.com/it/u=3078035915,2829215163&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=307",
    title: "鸟瞰图",
  },
]);
const list_2 = ref([
  {
    imgSrc:
      "https://img1.baidu.com/it/u=1740262818,2634252552&fm=253&fmt=auto&app=138&f=JPEG?w=700&h=410",
    title: "鸟瞰图",
    tip: "最新",
    desc: "北京鸟瞰图",
    opt: "数据探索",
  },
  {
    imgSrc:
      "https://img1.baidu.com/it/u=259697987,3037948867&fm=253&fmt=auto&app=138&f=JPEG?w=719&h=500",
    title: "鸟瞰图",
    tip: "最新",
    desc: "北京鸟瞰图",
    opt: "数据探索",
  },
  {
    imgSrc:
      "https://img0.baidu.com/it/u=3940123156,478613217&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=343",
    title: "鸟瞰图",
    tip: "最新",
    desc: "北京鸟瞰图",
    opt: "数据探索",
  },
  {
    imgSrc:
      "https://img0.baidu.com/it/u=2141077553,2221709202&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667",
    title: "鸟瞰图",
    tip: "最新",
    desc: "北京鸟瞰图",
    opt: "数据探索",
  },
  {
    imgSrc:
      "https://img0.baidu.com/it/u=1369698254,780733071&fm=253&fmt=auto&app=138&f=JPEG?w=630&h=354",
    title: "鸟瞰图",
    tip: "最新",
    desc: "北京鸟瞰图",
    opt: "数据探索",
  },
]);
</script>

<style lang="scss" scoped>
.containers {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  .banner {
    width: 100%;
    height: 200px;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .info{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      z-index: 100;
      p{
        &:nth-child(1){
          font-size: 30px;
        }
        &:nth-child(2){
        font-size: 13px;
        }
      }
    }
    .mask{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(255,255,255,.5);
    }
  }
  .header{
    color: black;
    align-self: self-start;
  }
  .list-1 {
    width: 100%;
    display: grid;
    grid-template-areas:
      "a b c d"
      "a e c f";
      gap: 20px;
      grid-template-rows: 150px;
      grid-auto-rows: 150px;
    .item {
     border-radius: 20px;
      overflow: hidden;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      p{
        position: absolute;
        bottom: 15px;
        left: 15px;
        padding: 7px 13px;
       color: white;
        background-color: rgb(0,0,0,.5);
      }
      &:nth-child(1) {
        grid-area: a;
      }
      &:nth-child(2) {
        grid-area: b;
      }
      &:nth-child(3) {
        grid-area: c;
      }
      &:nth-child(4) {
        grid-area: d;
      }
      &:nth-child(5) {
        grid-area: e;
      }
      &:nth-child(6) {
        grid-area: f;
      }
    }
  }
  .list-2 {
    display: grid;
    grid-template-columns: repeat(5,1fr);
    width: 100%;
    gap: 15px;
    .item{
      display: flex;
      flex-direction: column;
      gap: 10px;
      background-color: rgb(241,241,241);
      .img{
        position: relative;
        width: 100%;
        height: 200px;
        border-radius: 15px;
        overflow: hidden;
        img{
          width:100%;
          height: 100%
        }
        p{
          position: absolute;
          left: 10px;
          top: 10px;
          padding: 7px 13px;
       color: white;
        background-color: rgb(0,0,0,.5);
        }
      }
      .info{
        padding: 10px;
        display: flex;
      flex-direction: column;
      gap: 10px;
      }

    }
  }
}
</style>
