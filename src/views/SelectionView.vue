<template>
  <div class="container">
    <section class="map">
      <div class="header">智能位置选择</div>
      <div class="img" >
        <img
          src="https://img1.baidu.com/it/u=2611110878,3900475259&fm=253&fmt=auto&app=138&f=GIF?w=579&h=500"
          alt=""
          @click="handleRouter('/site')"
        />
      </div>
      <div class="desc">
        <p>北京天坛地图</p>

        <p>经纬度 40.185 N，23.220 W</p>
        <p>处于北京西城区</p>
        <p>经纬度 40.185 N，23.220 W</p>
        <p>处于北京西城区</p>
      </div>
    </section>
    <section class="info">
      <div class="header">其他信息</div>
      <div class="list">
        <div class="item" v-for="item in list">
          <p class="title">{{ item.title }}</p>
          <img :src="item.imgSrc" alt="" />
          <p class="desc">{{ item.desc }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const handleRouter = (path) => {
  router.push(`${path}`);
};
const list = ref([
  {
    imgSrc:
      "https://img2.baidu.com/it/u=413667388,3863499636&fm=253&fmt=auto&app=138&f=JPEG?w=815&h=500",
    title: "北京市地图",
    desc: "处于河北省内部",
  },
  {
    imgSrc:
      "https://img0.baidu.com/it/u=2801145307,3271762836&fm=253&fmt=auto&app=138&f=JPEG?w=765&h=500",
    title: "北京市地图",
    desc: "处于河北省内部",
  },
  {
    imgSrc:
      "http://t13.baidu.com/it/u=4110595183,3430883515&fm=224&app=112&f=JPEG?w=500&h=500",
    title: "北京市地图",
    desc: "处于河北省内部",
  },
  {
    imgSrc:
      "https://img0.baidu.com/it/u=1693432437,31643442&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=268",
    title: "北京市地图",
    desc: "处于河北省内部",
  },
]);
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 40px;
  .map{
    display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  .img{
    width: 800px;
    height: 400px;
    border-radius: 20px;
    overflow: hidden;
    img{
      width: 100%;
    height: 100%;
    cursor: pointer;
    }
  }
  .desc{
    display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: #818181;
  font-size: 13px
  }
  }
  .info{
    display: flex;
  flex-direction: column;
  gap: 15px;
  .header{
    font-size: 24px;
    font-weight: bold;
  }
.list{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 15px;
  .item{
    background-color: rgb(241,241,241);
    padding: 15px;
    display: flex;
  flex-direction: column;
  border-radius: 20px;
  gap: 15px;
  .title{

  }
  img{
    width: 60%;
    aspect-ratio: 16/9;
  }
  .desc{
    color: #818181;
  }
  
  }
}
  }
}

</style>
